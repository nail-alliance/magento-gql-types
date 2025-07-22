"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnStatus = void 0;
var ReturnStatus;
(function (ReturnStatus) {
    ReturnStatus["PENDING"] = "PENDING";
    ReturnStatus["UNCONFIRMED"] = "UNCONFIRMED";
    ReturnStatus["AUTHORIZED"] = "AUTHORIZED";
    ReturnStatus["PARTIALLY_AUTHORIZED"] = "PARTIALLY_AUTHORIZED";
    ReturnStatus["RECEIVED"] = "RECEIVED";
    ReturnStatus["PARTIALLY_RECEIVED"] = "PARTIALLY_RECEIVED";
    ReturnStatus["APPROVED"] = "APPROVED";
    ReturnStatus["PARTIALLY_APPROVED"] = "PARTIALLY_APPROVED";
    ReturnStatus["REJECTED"] = "REJECTED";
    ReturnStatus["PARTIALLY_REJECTED"] = "PARTIALLY_REJECTED";
    ReturnStatus["DENIED"] = "DENIED";
    ReturnStatus["PROCESSED_AND_CLOSED"] = "PROCESSED_AND_CLOSED";
    ReturnStatus["CLOSED"] = "CLOSED";
})(ReturnStatus || (exports.ReturnStatus = ReturnStatus = {}));
