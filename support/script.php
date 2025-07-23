<?php

$desc = file_get_contents(__DIR__ . '/pagecontent.txt');

define('SRC_FOLDER', dirname(__DIR__) . "/src");

$typesHeadings = [
    "Field Name 	Description",
    "Input Field 	Description"
];

$lines = explode("\n", $desc);

$class = "";
$classList = [];
$typeStart = false;
$descriptionStart = false;
$deprecatedFlag = false;
$fieldLine = false;
$enumLine = false;
$unionLine = 0;
$file = null;
$linesToWrite = [];
foreach ($lines as $num => $line) {
    if ($line === "Types")
    {
        $typeStart = true;
        continue;
    }
    if ($typeStart) {
        $class = $line;
        // open file
        $fileName = lcfirst($class);

        $content = "export type {$class} = {";
        if (strpos($line, 'Interface') !== false) {
            $content = "export interface {$class} {";
        }

        $linesToWrite[] = $content;
        $typeStart = false;
        continue;
    }

    if ($line === "Description") {
        $descriptionStart = true;
    }

    if ($descriptionStart) {
        if (strpos($line, 'Deprecated') !== false) {
            $deprecatedFlag = true;
        }
    }

    if ($line === 'Fields')
    {
        if ($deprecatedFlag) {
            $linesToWrite = array_merge([
                "/** @deprecated */"
            ], $linesToWrite);
        } else {
            $classList[] = $class;
        }
        $descriptionStart = false;
        $deprecatedFlag = false;
    }

    if (in_array($line, $typesHeadings)) {
        $fieldLine = true;
        continue;
    }

    if (substr($line, 0, 10) === "Enum Value")
    {
        $enumLine = true;
        $linesToWrite[0] = str_replace(["export type", "= "], ["export enum", ""], $linesToWrite[0]);
        continue;
    }

    if ($line === "Union Types")
    {
        $fieldLine = true;
        $unionLine = 1;
        continue;
    }

    if ($line === "Example")
    {
        $fieldLine = false;
        $enumLine = false;
    }

    if ($line === "Possible Types")
    {
        $fieldLine = false;
        $enumLine = false;
    }

    if ($line === "back to top") {
        if ($unionLine < 1)
        {
            $linesToWrite[] = "}";
        }
        $file = null;
        $fieldLine = false;
        $enumLine = false;
        $unionLine = 0;
        $typeStart = false;

        $file = fopen(dirname(__DIR__) . "/src/gql.{$fileName}.ts", "w");
        fwrite($file, join("\n", $linesToWrite));
        fclose($file);
        $file = null;
        $linesToWrite = [];
    }

    if ($fieldLine) {
        if (empty($line))
        {
            continue;
        }

        if (substr($line, 0, 9) === "Arguments")
        {
            continue;
        }

        $cols = explode("\t", $line);

        $name_type = explode('-', $cols[0]);

        $name = $name_type[0];
        $type = isset($name_type[1]) ? $name_type[1] : '';

        $name = trim($name);
        $type = trim($type);
        $desc = isset($cols[1]) ? trim($cols[1]) : "";

        $required = substr($type, -1) === "!";

        if ($unionLine === 1)
        {
            $linesToWrite[0] = str_replace("{", "", $linesToWrite[0]);
        }

        if ($unionLine)
        {
            $type = $name;
            $required = true;
        }


        if (!$required) {
            $name = $name . "?";
        }

        $type = typeConversion($type);

        $pureType = preg_replace("/[^a-zA-Z0-9]/", "", $type);

        $typeIsArray = (substr($type, 0, 1) === "[");

        $importName = "/gql." . ($pureType != "ID" ? lcfirst($pureType) : $pureType);

        $importFileName = SRC_FOLDER . $importName . ".ts";

        if (file_exists($importFileName)) {
            if ($pureType !== $class && !in_array("import {{$pureType}} from \".{$importName}\";", $linesToWrite)) {
                $linesToWrite = array_merge([
                    "import {{$pureType}} from \".{$importName}\";"
                ], $linesToWrite);
            }
        }

        $typeLine = "\t{$name}: {$pureType} // $desc";

        if ($typeIsArray) {
            $typeLine = "\t{$name}: {$pureType}[] // $desc";
        }

        if ($unionLine)
        {
            if ($unionLine > 1) {
                $typeLine = "\t| {$name}";
            } else {
                $typeLine = "\t{$name}";
            }
            $unionLine++;
        }

        if (strpos($desc, "Deprecated") !== false) {
            $linesToWrite[] = "\t/** @deprecated */";
        }

        $linesToWrite[] = $typeLine;
    }

    if ($enumLine) {
        if (preg_match("/^[A-Z\_]+$/", $line)) {
            $enumValue = "\t{$line} = \"{$line}\",";
            $linesToWrite[] = $enumValue;
        }
    }
}

// populate index

$indexImports = [];
$indexExports = [];

foreach ($classList as $type) {
    $pureType = preg_replace("/[^a-zA-Z0-9]/", "", $type);

    $importName = "/gql." . ($pureType != "ID" ? lcfirst($pureType) : $pureType);

    $importFileName = SRC_FOLDER . $importName . ".ts";

    $importString = "import {{$pureType} as _{$pureType}} from \".{$importName}\";";

    if (file_exists($importFileName)) {
        if (!in_array($importString, $indexImports)) {
            $indexImports[] = $importString;
        }
    }

    $exportString = "export type {$type} = _{$pureType}";

    if (!in_array($exportString, $indexExports)) {
        $indexExports[] = $exportString;
    }
}

$indexFile = fopen(dirname(__DIR__) . "/src/index.ts", "w");
fwrite($indexFile, join("\n", $indexImports));
fwrite($indexFile, join("\n", $indexExports));
fclose($indexFile);

function typeConversion($type)
{
    $type = str_replace("!", "", $type);
    switch ($type) {
        default:
            return $type;
    }
}