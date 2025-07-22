# Magento graphQL Types for Svelete

Types generated from Magento's graphQl documentation.

## Art Board Job Ticket

Not number

# Contents

- [Types](#types): Current root types
- [Branches](#branches): Description of primary branches on this repository.
- [License](#license)

# Types

Current types are those that branch out of the following root types:

- [Customer](./src/gql.customer.ts)
- [Cart](./src/gql.cart.ts)

# Branches

- `main` is the branch with the most updated code
- `dev-main` is the development branch
- `dev-[user]` is the individual developer branch

## `main` Branch

`main` is a protected branch that contains the production code.

Changes to the `main` branch occur only via "Pull Request," and must be approved
by the project manager.

## `dev-main` Branch

`dev-main` is a protected branch that contains the current-most version of
development that's ready to be deployed to `main`.

## `dev-[user]` Branches

`dev-[user]` branches are development branchs owned by the individual developer.
This is the trunk branch used by developers to carry out their work.

Developers can create further branches depending on the Job Ticket or task being
performed, but any such branch must always merge to their `dev-[user]` branch
before making a Pull request to `dev-main`.

# Versioning

Versioning is kept in 2 places: [package.json](package.json).

## package.json version

[package.json](package.json)'s version number, which should keep
[Semantic Versioning 2.0.0](https://semver.org/) scheme of

```
Given a version number MAJOR.MINOR.PATCH, increment the:

MAJOR version when you make incompatible API changes
MINOR version when you add functionality in a backward compatible manner
PATCH version when you make backward compatible bug fixes
Additional labels for pre-release and build metadata are available as extensions to the MAJOR.MINOR.PATCH format.
```

# License

Magento 2.4 is a copyright of [Magento, Inc / Adobe](https://github.com/magento/magento2/blob/2.4-develop/COPYING.txt), and it's licensed under [Open Software License 3.0](https://github.com/magento/magento2/blob/2.4-develop/LICENSE.txt).

Any other code not belonging to Nail Alliance is a copyright of their corresponding authors, and it's used under respective license.

Any other code Copyright (c) 2025 of Nail Alliance.
