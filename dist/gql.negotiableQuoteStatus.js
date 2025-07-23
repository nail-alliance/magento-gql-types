"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NegotiableQuoteStatus = void 0;
var NegotiableQuoteStatus;
(function (NegotiableQuoteStatus) {
    NegotiableQuoteStatus["SUBMITTED"] = "SUBMITTED";
    NegotiableQuoteStatus["PENDING"] = "PENDING";
    NegotiableQuoteStatus["UPDATED"] = "UPDATED";
    NegotiableQuoteStatus["OPEN"] = "OPEN";
    NegotiableQuoteStatus["ORDERED"] = "ORDERED";
    NegotiableQuoteStatus["CLOSED"] = "CLOSED";
    NegotiableQuoteStatus["DECLINED"] = "DECLINED";
    NegotiableQuoteStatus["EXPIRED"] = "EXPIRED";
    NegotiableQuoteStatus["DRAFT"] = "DRAFT";
})(NegotiableQuoteStatus || (exports.NegotiableQuoteStatus = NegotiableQuoteStatus = {}));
