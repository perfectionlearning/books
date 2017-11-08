/*
 * Product dropdown menu
 */

var ProductDropdown = function() {

    const menuItemTemplate = `<div class="pProductBtn" data-type="product-option" data-product="%ID%">%NAME%</div>`;
	$(document).off("getProductList", getProductData).on("getProductList", getProductData);
    var productList;

    function getProductData(e, data) {
        productList = data.productData;
    }

    function populate() {
        var keys = Object.keys(productList);
        $('.pMenuWrap').after('<div class="pProductWrap"></div>');
        keys.forEach((key) => {
            var item = productList[key];
            var name = item.name;
            var el = menuItemTemplate
                .replace('%ID%', item.id)
                .replace('%NAME%', item.name);
            $('.pProductWrap').append(el);
        });
    }

    function toggleProductDropdown() {
        $(document).find(".headerText").removeClass('pSelected');
        $(document).find(".pProductWrap").slideUp();
    }

    this.populate = populate;
};
