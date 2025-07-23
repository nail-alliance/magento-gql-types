import {Wishlist} from "./gql.wishlist";
import {CompanyTeam} from "./gql.companyTeam";
import {ID} from "./gql.ID";
import {CustomerStoreCredit} from "./gql.customerStoreCredit";
import {CompanyUserStatusEnum} from "./gql.companyUserStatusEnum";
import {CustomerSegment} from "./gql.customerSegment";
import {CompanyRole} from "./gql.companyRole";
import {RewardPoints} from "./gql.rewardPoints";
import {ProductReviews} from "./gql.productReviews";
import {Returns} from "./gql.returns";
import {Return} from "./gql.return";
import {RequisitionLists} from "./gql.requisitionLists";
import {PurchaseOrders} from "./gql.purchaseOrders";
import {PurchaseOrderApprovalRules} from "./gql.purchaseOrderApprovalRules";
import {PurchaseOrderApprovalRuleMetadata} from "./gql.purchaseOrderApprovalRuleMetadata";
import {PurchaseOrderApprovalRule} from "./gql.purchaseOrderApprovalRule";
import {PurchaseOrder} from "./gql.purchaseOrder";
import {CustomerOrders} from "./gql.customerOrders";
import {CustomerGroup} from "./gql.customerGroup";
import {GiftRegistry} from "./gql.giftRegistry";
import {Int} from "./gql.int";
import {AttributeValueInterface} from "./gql.attributeValueInterface";
import {String} from "./gql.string";
import {ConfirmationStatusEnum} from "./gql.confirmationStatusEnum";
import {CompareList} from "./gql.compareList";
import {UserCompaniesOutput} from "./gql.userCompaniesOutput";
import {Boolean} from "./gql.boolean";
import {CustomerAddresses} from "./gql.customerAddresses";
import {CustomerAddress} from "./gql.customerAddress";
export type Customer = {
	addresses?: [CustomerAddress] // An array containing the customer's shipping and billing addresses.
	addressesV2?: CustomerAddresses // An array containing the customer's shipping and billing addresses.
	allow_remote_shopping_assistance: Boolean // Indicates whether the customer has enabled remote shopping assistance.
	companies: UserCompaniesOutput // An object that contains a list of companies user is assigned to.
	compare_list?: CompareList // The contents of the customer's compare list.
	confirmation_status: ConfirmationStatusEnum // The customer's confirmation status.
	created_at?: String // Timestamp indicating when the account was created.
	custom_attributes?: [AttributeValueInterface] // Customer's custom attributes.
	date_of_birth?: String // The customer's date of birth.
	default_billing?: String // The ID assigned to the billing address.
	default_shipping?: String // The ID assigned to the shipping address.
	/** @deprecated */
	dob?: String // The customer's date of birth. Use date_of_birth instead. Deprecated
	email?: String // The customer's email address. Required.
	firstname?: String // The customer's first name.
	gender?: Int // The customer's gender (Male - 1, Female - 2).
	gift_registries?: [GiftRegistry] // Details about all of the customer's gift registries.
	gift_registry?: GiftRegistry // Details about a specific gift registry.
	group?: CustomerGroup // Name of the customer group assigned to the customer
	/** @deprecated */
	group_id?: Int // Customer group should not be exposed in the storefront scenarios. Deprecated
	/** @deprecated */
	id?: Int // The ID assigned to the customer. id is not needed as part of Customer, because on the server side, it can be identified based on the customer token used for authentication. There is no need to know customer ID on the client side. Deprecated
	is_subscribed?: Boolean // Indicates whether the customer is subscribed to the company's newsletter.
	job_title?: String // The job title of a company user.
	lastname?: String // The customer's family name.
	middlename?: String // The customer's middle name.
	orders?: CustomerOrders // 
	prefix?: String // An honorific, such as Dr., Mr., or Mrs.
	purchase_order?: PurchaseOrder // Purchase order details.
	purchase_order_approval_rule?: PurchaseOrderApprovalRule // Details about a single purchase order approval rule.
	purchase_order_approval_rule_metadata?: PurchaseOrderApprovalRuleMetadata // Purchase order approval rule metadata that can be used for rule edit form rendering.
	purchase_order_approval_rules?: PurchaseOrderApprovalRules // A list of purchase order approval rules visible to the customer.
	purchase_orders?: PurchaseOrders // A list of purchase orders visible to the customer.
	purchase_orders_enabled: Boolean // Indicates whether purchase order functionality is enabled for the current customer. Global and company-level settings are factored into the result.
	requisition_lists?: RequisitionLists // An object that contains the customer's requisition lists.
	return?: Return // Details about the specified return request from the unique ID for a Return object.
	returns?: Returns // Information about the customer's return requests.
	reviews: ProductReviews // Contains the customer's product reviews.
	reward_points?: RewardPoints // Customer reward points details.
	role?: CompanyRole // The role name and permissions assigned to the company user.
	segments?: [CustomerSegment] // Customer segments associated with the current customer
	status?: CompanyUserStatusEnum // Indicates whether the company user is ACTIVE or INACTIVE.
	store_credit?: CustomerStoreCredit // Store credit information applied for the logged in customer.
	structure_id: ID // ID of the company structure
	suffix?: String // A value such as Sr., Jr., or III.
	taxvat?: String // The customer's Value-added tax (VAT) number (for corporate customers).
	team?: CompanyTeam // The team the company user is assigned to.
	telephone?: String // The phone number of the company user.
	/** @deprecated */
	wishlist: Wishlist // Return a customer's wish lists. Use Customer.wishlists or Customer.wishlist_v2 instead. Deprecated
	wishlist_v2?: Wishlist // Retrieve the wish list identified by the unique ID for a Wishlist object.
	wishlists: [Wishlist] // An array of wishlists. In Magento Open Source, customers are limited to one wish list. The number of wish lists is configurable for Adobe Commerce.
}