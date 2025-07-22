import {AttributeValueInterface} from "./gql.attributeValueInterface";
import {ID} from "./gql.ID";
import {CustomerAddress} from "./gql.customerAddress";
import {CustomerAddresses} from "./gql.customerAddresses";
import {UserCompaniesOutput} from "./gql.userCompaniesOutput";
import {CompareList} from "./gql.compareList";
import {ConfirmationStatusEnum} from "./gql.confirmationStatusEnum";
import {GiftRegistry} from "./gql.giftRegistry";
import {CustomerGroup} from "./gql.customerGroup";
import {CustomerOrders} from "./gql.customerOrders";
import {Return} from "./gql.return";
import {Returns} from "./gql.returns";
import {PurchaseOrders} from "./gql.purchaseOrders";
import {PurchaseOrder} from "./gql.purchaseOrder";
import {PurchaseOrderApprovalRules} from "./gql.purchaseOrderApprovalRules";
import {PurchaseOrderApprovalRule} from "./gql.purchaseOrderApprovalRule";
import {CompanyRole} from "./gql.companyRole";
import {PurchaseOrderApprovalRuleMetadata} from "./gql.purchaseOrderApprovalRuleMetadata";
import {RequisitionLists} from "./gql.requisitionLists";
import {ProductReviews} from "./gql.productReviews";
import {Wishlist} from "./gql.wishlist";
import {CompanyTeam} from "./gql.companyTeam";
import {CustomerStoreCredit} from "./gql.customerStoreCredit";
import {CompanyUserStatusEnum} from "./gql.companyUserStatusEnum";
import {CustomerSegment} from "./gql.customerSegment";
import {RewardPoints} from "./gql.rewardPoints";

export type Customer = {
    "addresses"?: CustomerAddress[] | null | undefined
    "addressesV2"?: CustomerAddresses | null | undefined
    "allow_remote_shopping_assistance": boolean
    "companies": UserCompaniesOutput
    "compare_list"?: CompareList | null | undefined
    "confirmation_status": ConfirmationStatusEnum
    "created_at"?: string | null | undefined
    "custom_attributes"?: AttributeValueInterface[] | null | undefined
    "date_of_birth"?: string | null | undefined
    "default_billing"?: string | null | undefined
    "default_shipping"?: string | null | undefined
    /** @deprecated */
    "dob"?: string | null | undefined
    "email"?: string | null | undefined
    "firstname"?: string | null | undefined
    "gender"?: number | null | undefined
    "gift_registries"?: GiftRegistry[] | null | undefined
    "gift_registry": GiftRegistry
    "group"?: CustomerGroup | null | undefined
    "group_id"?: number | null | undefined
    "id"?: number | null | undefined
    "is_subscribed"?: boolean | null | undefined
    "job_title"?: string | null | undefined
    "lastname"?: string | null | undefined
    "middlename"?: string | null | undefined
    "orders"?: CustomerOrders | null | undefined
    "prefix": string
    "purchase_order"?: PurchaseOrder | null | undefined
    "purchase_order_approval_rule"?: PurchaseOrderApprovalRule | null | undefined
    "purchase_order_approval_rule_metadata"?: PurchaseOrderApprovalRuleMetadata | null | undefined
    "purchase_order_approval_rules"?: PurchaseOrderApprovalRules | null | undefined
    "purchase_orders": PurchaseOrders
    "purchase_orders_enabled"?: boolean | null | undefined
    "requisition_lists": RequisitionLists
    "return"?: Return | null | undefined
    "returns"?: Returns | null | undefined
    "reviews": ProductReviews
    "reward_points"?: RewardPoints | null | undefined
    "role"?: CompanyRole | null | undefined
    "segments"?: CustomerSegment[] | null | undefined
    "status"?: CompanyUserStatusEnum | null | undefined
    "store_credit"?: CustomerStoreCredit | null | undefined
    "structure_id": ID
    "suffix"?: string | null | undefined
    "taxvat"?: string | null | undefined
    "team": CompanyTeam
    "telephone": string
    /** @deprecated */
    "wishlist": Wishlist
    "wishlist_v2": Wishlist
    "wishlists": Wishlist[]
}



