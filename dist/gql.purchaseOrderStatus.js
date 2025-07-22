"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PurchaseOrderStatus = void 0;
var PurchaseOrderStatus;
(function (PurchaseOrderStatus) {
    PurchaseOrderStatus["PENDING"] = "PENDING";
    PurchaseOrderStatus["APPROVAL_REQUIRED"] = "APPROVAL_REQUIRED";
    PurchaseOrderStatus["APPROVED"] = "APPROVED";
    PurchaseOrderStatus["ORDER_IN_PROGRESS"] = "ORDER_IN_PROGRESS";
    PurchaseOrderStatus["ORDER_PLACED"] = "ORDER_PLACED";
    PurchaseOrderStatus["ORDER_FAILED"] = "ORDER_FAILED";
    PurchaseOrderStatus["REJECTED"] = "REJECTED";
    PurchaseOrderStatus["CANCELED"] = "CANCELED";
    PurchaseOrderStatus["APPROVED_PENDING_PAYMENT"] = "APPROVED_PENDING_PAYMENT";
})(PurchaseOrderStatus || (exports.PurchaseOrderStatus = PurchaseOrderStatus = {}));
