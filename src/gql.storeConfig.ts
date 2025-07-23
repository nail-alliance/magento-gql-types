import {TaxWrappingEnum} from "./gql.taxWrappingEnum";
import {SendFriendConfiguration} from "./gql.sendFriendConfiguration";
import {ID} from "./gql.ID";
import {Money} from "./gql.money";
import {CancellationReason} from "./gql.cancellationReason";
import {Float} from "./gql.float";
import {ProductImageThumbnail} from "./gql.productImageThumbnail";
import {FixedProductTaxDisplaySettings} from "./gql.fixedProductTaxDisplaySettings";
import {Int} from "./gql.int";
import {Boolean} from "./gql.boolean";
import {String} from "./gql.string";
export type StoreConfig = {
	absolute_footer?: String // Contains scripts that must be included in the HTML before the closing <body> tag.
	allow_gift_receipt?: String // Indicates if the gift sender has the option to send a gift receipt. Possible values: 1 (Yes) and 0 (No).
	allow_gift_wrapping_on_order?: String // Indicates whether gift wrapping can be added for the entire order. Possible values: 1 (Yes) and 0 (No).
	allow_gift_wrapping_on_order_items?: String // Indicates whether gift wrapping can be added for individual order items. Possible values: 1 (Yes) and 0 (No).
	allow_guests_to_write_product_reviews?: String // Indicates whether guest users can write product reviews. Possible values: 1 (Yes) and 0 (No).
	allow_items?: String // The value of the Allow Gift Messages for Order Items option
	allow_order?: String // The value of the Allow Gift Messages on Order Level option
	allow_printed_card?: String // Indicates if a printed card can accompany an order. Possible values: 1 (Yes) and 0 (No).
	autocomplete_on_storefront?: Boolean // Indicates whether to enable autocomplete on login and forgot password forms.
	base_currency_code?: String // The base currency code.
	base_link_url?: String // A fully-qualified URL that is used to create relative links to the base_url.
	base_media_url?: String // The fully-qualified URL that specifies the location of media files.
	base_static_url?: String // The fully-qualified URL that specifies the location of static view files.
	base_url?: String // The store’s fully-qualified base URL.
	braintree_3dsecure_allowspecific?: Boolean // Braintree 3D Secure, should 3D Secure be used for specific countries.
	braintree_3dsecure_always_request_3ds?: Boolean // Braintree 3D Secure, always request 3D Secure flag.
	braintree_3dsecure_specificcountry?: String // Braintree 3D Secure, the specific countries to use 3D Secure in, to be used if allow specific is status is enabled.
	braintree_3dsecure_threshold_amount?: String // Braintree 3D Secure, threshold above which 3D Secure should be requested.
	braintree_3dsecure_verify_3dsecure?: Boolean // Braintree 3D Secure enabled/active status.
	braintree_ach_direct_debit_vault_active?: Boolean // Braintree ACH vault status.
	braintree_applepay_merchant_name?: String // Braintree Apple Pay merchant name.
	braintree_applepay_vault_active?: Boolean // Braintree Apple Pay vault status.
	braintree_cc_vault_active?: String // Braintree cc vault status.
	braintree_cc_vault_cvv?: Boolean // Braintree cc vault CVV re-verification enabled status.
	braintree_environment?: String // Braintree environment.
	braintree_googlepay_btn_color?: String // Braintree Google Pay button color.
	braintree_googlepay_cctypes?: String // Braintree Google Pay Card types supported.
	braintree_googlepay_merchant_id?: String // Braintree Google Pay merchant ID.
	braintree_googlepay_vault_active?: Boolean // Braintree Google Pay vault status.
	braintree_local_payment_allowed_methods?: String // Braintree Local Payment Methods allowed payment methods.
	braintree_local_payment_fallback_button_text?: String // Braintree Local Payment Methods fallback button text.
	braintree_local_payment_redirect_on_fail?: String // Braintree Local Payment Methods redirect URL on failed payment.
	braintree_merchant_account_id?: String // Braintree Merchant Account ID.
	braintree_paypal_button_location_cart_type_credit_color?: String // Braintree PayPal Credit mini-cart & cart button style color.
	braintree_paypal_button_location_cart_type_credit_label?: String // Braintree PayPal Credit mini-cart & cart button style label.
	braintree_paypal_button_location_cart_type_credit_shape?: String // Braintree PayPal Credit mini-cart & cart button style shape.
	braintree_paypal_button_location_cart_type_credit_show?: Boolean // Braintree PayPal Credit mini-cart & cart button show status.
	braintree_paypal_button_location_cart_type_messaging_layout?: String // Braintree PayPal Pay Later messaging mini-cart & cart style layout.
	braintree_paypal_button_location_cart_type_messaging_logo?: String // Braintree PayPal Pay Later messaging mini-cart & cart style logo.
	braintree_paypal_button_location_cart_type_messaging_logo_position?: String // Braintree PayPal Pay Later messaging mini-cart & cart style logo position.
	braintree_paypal_button_location_cart_type_messaging_show?: Boolean // Braintree PayPal Pay Later messaging mini-cart & cart show status.
	braintree_paypal_button_location_cart_type_messaging_text_color?: String // Braintree PayPal Pay Later messaging checkout style text color.
	braintree_paypal_button_location_cart_type_paylater_color?: String // Braintree PayPal Pay Later mini-cart & cart button style color.
	braintree_paypal_button_location_cart_type_paylater_label?: String // Braintree PayPal Pay Later mini-cart & cart button style label.
	braintree_paypal_button_location_cart_type_paylater_shape?: String // Braintree PayPal Pay Later mini-cart & cart button style shape.
	braintree_paypal_button_location_cart_type_paylater_show?: Boolean // Braintree PayPal Pay Later mini-cart & cart button show status.
	braintree_paypal_button_location_cart_type_paypal_color?: String // Braintree PayPal mini-cart & cart button style color.
	braintree_paypal_button_location_cart_type_paypal_label?: String // Braintree PayPal mini-cart & cart button style label.
	braintree_paypal_button_location_cart_type_paypal_shape?: String // Braintree PayPal mini-cart & cart button style shape.
	braintree_paypal_button_location_cart_type_paypal_show?: Boolean // Braintree PayPal mini-cart & cart button show.
	braintree_paypal_button_location_checkout_type_credit_color?: String // Braintree PayPal Credit checkout button style color.
	braintree_paypal_button_location_checkout_type_credit_label?: String // Braintree PayPal Credit checkout button style label.
	braintree_paypal_button_location_checkout_type_credit_shape?: String // Braintree PayPal Credit checkout button style shape.
	braintree_paypal_button_location_checkout_type_credit_show?: Boolean // Braintree PayPal Credit checkout button show status.
	braintree_paypal_button_location_checkout_type_messaging_layout?: String // Braintree PayPal Pay Later messaging checkout style layout.
	braintree_paypal_button_location_checkout_type_messaging_logo?: String // Braintree PayPal Pay Later messaging checkout style logo.
	braintree_paypal_button_location_checkout_type_messaging_logo_position?: String // Braintree PayPal Pay Later messaging checkout style logo position.
	braintree_paypal_button_location_checkout_type_messaging_show?: Boolean // Braintree PayPal Pay Later messaging checkout show status.
	braintree_paypal_button_location_checkout_type_messaging_text_color?: String // Braintree PayPal Pay Later messaging checkout style text color.
	braintree_paypal_button_location_checkout_type_paylater_color?: String // Braintree PayPal Pay Later checkout button style color.
	braintree_paypal_button_location_checkout_type_paylater_label?: String // Braintree PayPal Pay Later checkout button style label.
	braintree_paypal_button_location_checkout_type_paylater_shape?: String // Braintree PayPal Pay Later checkout button style shape.
	braintree_paypal_button_location_checkout_type_paylater_show?: Boolean // Braintree PayPal Pay Later checkout button show status.
	braintree_paypal_button_location_checkout_type_paypal_color?: String // Braintree PayPal checkout button style color.
	braintree_paypal_button_location_checkout_type_paypal_label?: String // Braintree PayPal checkout button style label.
	braintree_paypal_button_location_checkout_type_paypal_shape?: String // Braintree PayPal checkout button style shape.
	braintree_paypal_button_location_checkout_type_paypal_show?: Boolean // Braintree PayPal checkout button show.
	braintree_paypal_button_location_productpage_type_credit_color?: String // Braintree PayPal Credit PDP button style color.
	braintree_paypal_button_location_productpage_type_credit_label?: String // Braintree PayPal Credit PDP button style label.
	braintree_paypal_button_location_productpage_type_credit_shape?: String // Braintree PayPal Credit PDP button style shape.
	braintree_paypal_button_location_productpage_type_credit_show?: Boolean // Braintree PayPal Credit PDP button show status.
	braintree_paypal_button_location_productpage_type_messaging_layout?: String // Braintree PayPal Pay Later messaging PDP style layout.
	braintree_paypal_button_location_productpage_type_messaging_logo?: String // Braintree PayPal Pay Later messaging PDP style logo.
	braintree_paypal_button_location_productpage_type_messaging_logo_position?: String // Braintree PayPal Pay Later messaging PDP style logo position.
	braintree_paypal_button_location_productpage_type_messaging_show?: Boolean // Braintree PayPal Pay Later messaging PDP show status.
	braintree_paypal_button_location_productpage_type_messaging_text_color?: String // Braintree PayPal Pay Later messaging PDP style text color.
	braintree_paypal_button_location_productpage_type_paylater_color?: String // Braintree PayPal Pay Later PDP button style color.
	braintree_paypal_button_location_productpage_type_paylater_label?: String // Braintree PayPal Pay Later PDP button style label.
	braintree_paypal_button_location_productpage_type_paylater_shape?: String // Braintree PayPal Pay Later PDP button style shape.
	braintree_paypal_button_location_productpage_type_paylater_show?: Boolean // Braintree PayPal Pay Later PDP button show status.
	braintree_paypal_button_location_productpage_type_paypal_color?: String // Braintree PayPal PDP button style color.
	braintree_paypal_button_location_productpage_type_paypal_label?: String // Braintree PayPal PDP button style label.
	braintree_paypal_button_location_productpage_type_paypal_shape?: String // Braintree PayPal PDP button style shape.
	braintree_paypal_button_location_productpage_type_paypal_show?: Boolean // Braintree PayPal PDP button show.
	braintree_paypal_credit_uk_merchant_name?: String // Braintree PayPal Credit Merchant Name on the FCA Register.
	braintree_paypal_display_on_shopping_cart?: Boolean // Should display Braintree PayPal in mini-cart & cart?
	braintree_paypal_merchant_country?: String // Braintree PayPal merchant's country.
	braintree_paypal_merchant_name_override?: String // Braintree PayPal override for Merchant Name.
	braintree_paypal_require_billing_address?: Boolean // Does Braintree PayPal require the customer's billing address?
	braintree_paypal_send_cart_line_items?: Boolean // Does Braintree PayPal require the order line items?
	braintree_paypal_vault_active?: Boolean // Braintree PayPal vault status.
	cart_expires_in_days?: Int // checkout/cart/delete_quote_after: quote lifetime in days.
	cart_gift_wrapping?: String // Indicates if gift wrapping prices are displayed on the Shopping Cart page. Possible values: 1 (Yes) and 0 (No).
	cart_printed_card?: String // Indicates if printed card prices are displayed on the Shopping Cart page. Possible values: 1 (Yes) and 0 (No).
	cart_summary_display_quantity?: Int // checkout/cart_link/use_qty: what to show in the display cart summary, number of items or item quantities.
	catalog_default_sort_by?: String // The default sort order of the search results list.
	category_fixed_product_tax_display_setting?: FixedProductTaxDisplaySettings // Corresponds to the 'Display Prices In Product Lists' field in the Admin. It indicates how FPT information is displayed on category pages.
	category_url_suffix?: String // The suffix applied to category pages, such as .htm or .html.
	check_money_order_enable_for_specific_countries?: Boolean // Indicates whether only specific countries can use this payment method.
	check_money_order_enabled?: Boolean // Indicates whether the Check/Money Order payment method is enabled.
	check_money_order_make_check_payable_to?: String // The name of the party to whom the check must be payable.
	check_money_order_max_order_total?: String // The maximum order amount required to qualify for the Check/Money Order payment method.
	check_money_order_min_order_total?: String // The minimum order amount required to qualify for the Check/Money Order payment method.
	check_money_order_new_order_status?: String // The status of new orders placed using the Check/Money Order payment method.
	check_money_order_payment_from_specific_countries?: String // A comma-separated list of specific countries allowed to use the Check/Money Order payment method.
	check_money_order_send_check_to?: String // The full street address or PO Box where the checks are mailed.
	check_money_order_sort_order?: Int // A number indicating the position of the Check/Money Order payment method in the list of available payment methods during checkout.
	check_money_order_title?: String // The title of the Check/Money Order payment method displayed on the storefront.
	cms_home_page?: String // The name of the CMS page that identifies the home page for the store.
	cms_no_cookies?: String // A specific CMS page that displays when cookies are not enabled for the browser.
	cms_no_route?: String // A specific CMS page that displays when a 404 'Page Not Found' error occurs.
	/** @deprecated */
	code?: String // A code assigned to the store to identify it. Use store_code instead. Deprecated
	configurable_product_image: ProductImageThumbnail // checkout/cart/configurable_product_image: which image to use for configurable products.
	configurable_thumbnail_source?: String // Indicates whether the parent or child (itself) thumbnail should be used in the cart for configurable products.
	contact_enabled: Boolean // Indicates whether the Contact Us form in enabled.
	copyright?: String // The copyright statement that appears at the bottom of each page.
	countries_with_required_region?: String // Extended Config Data - general/region/state_required
	create_account_confirmation?: Boolean // Indicates if the new accounts need confirmation.
	customer_access_token_lifetime?: Float // Customer access token lifetime.
	default_country?: String // Extended Config Data - general/country/default
	default_description?: String // The description that provides a summary of your site for search engine listings. It should not be more than 160 characters in length.
	default_display_currency_code?: String // The default display currency code.
	default_keywords?: String // A series of keywords that describe your store, each separated by a comma.
	default_title?: String // The title that appears at the title bar of each page when viewed in a browser.
	demonotice?: Int // Controls the display of the demo store notice at the top of the page. Options: 0 (No) or 1 (Yes).
	display_product_prices_in_catalog: Int // Configuration data from tax/display/type
	display_shipping_prices: Int // Configuration data from tax/display/shipping
	display_state_if_optional?: Boolean // Extended Config Data - general/region/display_all
	enable_multiple_wishlists?: String // Indicates whether customers can have multiple wish lists. Possible values: 1 (Yes) and 0 (No).
	fixed_product_taxes_apply_tax_to_fpt: Boolean // Configuration data from tax/weee/apply_vat
	fixed_product_taxes_display_prices_in_emails: Int // Configuration data from tax/weee/display_email
	fixed_product_taxes_display_prices_in_product_lists: Int // Configuration data from tax/weee/display_list
	fixed_product_taxes_display_prices_in_sales_modules: Int // Configuration data from tax/weee/display_sales
	fixed_product_taxes_display_prices_on_product_view_page: Int // Configuration data from tax/weee/display
	fixed_product_taxes_enable: Boolean // Configuration data from tax/weee/enable
	fixed_product_taxes_include_fpt_in_subtotal: Boolean // Configuration data from tax/weee/include_in_subtotal
	front?: String // The landing page that is associated with the base URL.
	graphql_share_all_customer_groups: Boolean // Configuration data from customer/account_information/graphql_share_all_customer_groups
	graphql_share_customer_group: Boolean // Configuration data from customer/account_information/graphql_share_customer_group
	grid_per_page?: Int // The default number of products per page in Grid View.
	grid_per_page_values?: String // A list of numbers that define how many products can be displayed in Grid View.
	grouped_product_image: ProductImageThumbnail // checkout/cart/grouped_product_image: which image to use for grouped products.
	head_includes?: String // Scripts that must be included in the HTML before the closing <head> tag.
	head_shortcut_icon?: String // The small graphic image (favicon) that appears in the address bar and tab of the browser.
	header_logo_src?: String // The path to the logo that appears in the header.
	/** @deprecated */
	id?: Int // The ID number assigned to the store. Use store_code instead. Deprecated
	is_checkout_agreements_enabled: Boolean // Configuration data from checkout/options/enable_agreements
	is_default_store?: Boolean // Indicates whether the store view has been designated as the default within the store group.
	is_default_store_group?: Boolean // Indicates whether the store group has been designated as the default within the website.
	is_guest_checkout_enabled?: Boolean // checkout/options/guest_checkout: whether the guest checkout is enabled or not.
	is_negotiable_quote_active?: Boolean // Indicates whether negotiable quote functionality is enabled.
	is_one_page_checkout_enabled?: Boolean // checkout/options/onepage_checkout_enabled: whether the one page checkout is enabled or not
	is_requisition_list_active?: String // Indicates whether requisition lists are enabled. Possible values: 1 (Yes) and 0 (No).
	list_mode?: String // The format of the search results list.
	list_per_page?: Int // The default number of products per page in List View.
	list_per_page_values?: String // A list of numbers that define how many products can be displayed in List View.
	locale?: String // The store locale.
	logo_alt?: String // The Alt text that is associated with the logo.
	logo_height?: Int // The height of the logo image, in pixels.
	logo_width?: Int // The width of the logo image, in pixels.
	magento_reward_general_is_enabled?: String // Indicates whether reward points functionality is enabled. Possible values: 1 (Enabled) and 0 (Disabled).
	magento_reward_general_is_enabled_on_front?: String // Indicates whether reward points functionality is enabled on the storefront. Possible values: 1 (Enabled) and 0 (Disabled).
	magento_reward_general_min_points_balance?: String // The minimum point balance customers must have before they can redeem them. A null value indicates no minimum.
	magento_reward_general_publish_history?: String // When enabled, customers can see a detailed history of their reward points. Possible values: 1 (Enabled) and 0 (Disabled).
	magento_reward_points_invitation_customer?: String // The number of points for a referral when an invitee registers on the site.
	magento_reward_points_invitation_customer_limit?: String // The maximum number of registration referrals that will qualify for rewards. A null value indicates no limit.
	magento_reward_points_invitation_order?: String // The number of points for a referral, when an invitee places their first order on the site.
	magento_reward_points_invitation_order_limit?: String // The number of order conversions that can earn points for the customer who sends the invitation. A null value indicates no limit.
	magento_reward_points_newsletter?: String // The number of points earned by registered customers who subscribe to a newsletter.
	magento_reward_points_order?: String // Indicates customers earn points for shopping according to the reward point exchange rate. In Luma, this also controls whether to show a message in the shopping cart about the rewards points earned for the purchase, as well as the customer’s current reward point balance.
	magento_reward_points_register?: String // The number of points customer gets for registering.
	magento_reward_points_review?: String // The number of points for writing a review.
	magento_reward_points_review_limit?: String // The maximum number of reviews that will qualify for the rewards. A null value indicates no limit.
	magento_wishlist_general_is_enabled?: String // Indicates whether wishlists are enabled (1) or disabled (0).
	max_items_in_order_summary?: Int // checkout/options/max_items_display_count: maximum number of items to display in order summary.
	maximum_number_of_wishlists?: String // If multiple wish lists are enabled, the maximum number of wish lists the customer can have.
	minicart_display?: Boolean // checkout/sidebar/display: whether to display the minicart or not.
	minicart_max_items?: Int // checkout/sidebar/count: maximum number of items to show in minicart.
	minimum_password_length?: String // The minimum number of characters required for a valid password.
	newsletter_enabled: Boolean // Indicates whether newsletters are enabled.
	no_route?: String // The default page that displays when a 404 'Page not Found' error occurs.
	optional_zip_countries?: String // Extended Config Data - general/country/optional_zip_countries
	order_cancellation_enabled: Boolean // Indicates whether orders can be cancelled by customers or not.
	order_cancellation_reasons: [CancellationReason] // An array containing available cancellation reasons.
	orders_invoices_credit_memos_display_full_summary: Boolean // Configuration data from tax/sales_display/full_summary
	orders_invoices_credit_memos_display_grandtotal: Boolean // Configuration data from tax/sales_display/grandtotal
	orders_invoices_credit_memos_display_price: Int // Configuration data from tax/sales_display/price
	orders_invoices_credit_memos_display_shipping_amount: Int // Configuration data from tax/sales_display/shipping
	orders_invoices_credit_memos_display_subtotal: Int // Configuration data from tax/sales_display/subtotal
	orders_invoices_credit_memos_display_zero_tax: Boolean // Configuration data from tax/sales_display/zero_tax
	payment_payflowpro_cc_vault_active?: String // Payflow Pro vault status.
	/** @deprecated */
	printed_card_price?: String // The default price of a printed card that accompanies an order. Use printed_card_priceV2 instead Deprecated
	printed_card_priceV2?: Money // The default price of a printed card that accompanies an order.
	product_fixed_product_tax_display_setting?: FixedProductTaxDisplaySettings // Corresponds to the 'Display Prices On Product View Page' field in the Admin. It indicates how FPT information is displayed on product pages.
	product_reviews_enabled?: String // Indicates whether product reviews are enabled. Possible values: 1 (Yes) and 0 (No).
	product_url_suffix?: String // The suffix applied to product pages, such as .htm or .html.
	quickorder_active: Boolean // Indicates whether quick order functionality is enabled.
	required_character_classes_number?: String // The number of different character classes (lowercase, uppercase, digits, special characters) required in a password.
	returns_enabled: String // Indicates whether RMA is enabled on the storefront. Possible values: enabled/disabled.
	/** @deprecated */
	root_category_id?: Int // The ID of the root category. Use root_category_uid instead. Deprecated
	root_category_uid?: ID // The unique ID for a CategoryInterface object.
	sales_fixed_product_tax_display_setting?: FixedProductTaxDisplaySettings // Corresponds to the 'Display Prices In Sales Modules' field in the Admin. It indicates how FPT information is displayed on cart, checkout, and order pages.
	sales_gift_wrapping?: String // Indicates if gift wrapping prices are displayed on the Orders page. Possible values: 1 (Yes) and 0 (No).
	sales_printed_card?: String // Indicates if printed card prices are displayed on the Orders page. Possible values: 1 (Yes) and 0 (No).
	secure_base_link_url?: String // A secure fully-qualified URL that is used to create relative links to the base_url.
	secure_base_media_url?: String // The secure fully-qualified URL that specifies the location of media files.
	secure_base_static_url?: String // The secure fully-qualified URL that specifies the location of static view files.
	secure_base_url?: String // The store’s fully-qualified secure base URL.
	send_friend?: SendFriendConfiguration // Email to a Friend configuration.
	share_all_catalog_rules: Boolean // Configuration data from catalog/rule/share_all_catalog_rules
	share_all_sales_rule: Boolean // Configuration data from promo/graphql/share_all_sales_rule
	share_applied_catalog_rules: Boolean // Configuration data from catalog/rule/share_applied_catalog_rules
	share_applied_sales_rule: Boolean // Configuration data from promo/graphql/share_applied_sales_rule
	shopping_cart_display_full_summary?: Boolean // Extended Config Data - tax/cart_display/full_summary
	shopping_cart_display_grand_total?: Boolean // Extended Config Data - tax/cart_display/grandtotal
	shopping_cart_display_price?: Int // Extended Config Data - tax/cart_display/price
	shopping_cart_display_shipping?: Int // Extended Config Data - tax/cart_display/shipping
	shopping_cart_display_subtotal?: Int // Extended Config Data - tax/cart_display/subtotal
	shopping_cart_display_tax_gift_wrapping?: TaxWrappingEnum // Extended Config Data - tax/cart_display/gift_wrapping
	shopping_cart_display_zero_tax?: Boolean // Extended Config Data - tax/cart_display/zero_tax
	show_cms_breadcrumbs?: Int // Indicates whether a breadcrumb trail appears on all CMS pages in the catalog. 0 (No) or 1 (Yes).
	store_code?: ID // The unique ID of the store view. In the Admin, this is called the Store View Code. When making a GraphQL call, assign this value to the Store header to provide the scope.
	store_group_code?: ID // The unique ID assigned to the store group. In the Admin, this is called the Store Name.
	store_group_name?: String // The label assigned to the store group.
	store_name?: String // The label assigned to the store view.
	store_sort_order?: Int // The store view sort order.
	timezone?: String // The time zone of the store.
	title_prefix?: String // A prefix that appears before the title to create a two- or three-part title.
	title_separator?: String // The character that separates the category name and subcategory in the browser title bar.
	title_suffix?: String // A suffix that appears after the title to create a two- or three-part title.
	use_store_in_url?: Boolean // Indicates whether the store code should be used in the URL.
	website_code?: ID // The unique ID for the website.
	/** @deprecated */
	website_id?: Int // The ID number assigned to the website store. The field should not be used on the storefront. Deprecated
	website_name?: String // The label assigned to the website.
	weight_unit?: String // The unit of weight.
	welcome?: String // Text that appears in the header of the page and includes the name of the logged in customer.
	zero_subtotal_enable_for_specific_countries?: Boolean // Indicates whether only specific countries can use this payment method.
	zero_subtotal_enabled?: Boolean // Indicates whether the Zero Subtotal payment method is enabled.
	zero_subtotal_new_order_status?: String // The status of new orders placed using the Zero Subtotal payment method.
	zero_subtotal_payment_action?: String // When the new order status is 'Processing', this can be set to authorize_capture to automatically invoice all items that have a zero balance.
	zero_subtotal_payment_from_specific_countries?: String // A comma-separated list of specific countries allowed to use the Zero Subtotal payment method.
	zero_subtotal_sort_order?: Int // A number indicating the position of the Zero Subtotal payment method in the list of available payment methods during checkout.
	zero_subtotal_title?: String // The title of the Zero Subtotal payment method displayed on the storefront.
}