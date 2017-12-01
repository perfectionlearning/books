/*
 * Product dropdown menu
 * 
 */

var ProductDropdown = function() {

    const menuItemTemplate = `<div class="pProductBtn" data-type="product-option" data-product="%ID%">%NAME%</div>`;
    $(document).off("getProductList", getProductData).on("getProductList", getProductData);

    const bottomArrowTemplate = `<i class="glyphicon glyphicon-triangle-bottom subject-dropdown-icon"></i>`;

    var productList;

    function getProductData(e, data) {
      var noDups = [], subjects = [];
      try {
        var keys = Object.keys(data.productData);
        keys.forEach((key) => {
          var item = data.productData[key];
          var subject = item.product_name;
          if (noDups.indexOf(subject) === -1) {
            noDups.push(subject);
            subjects.push({ subject: subject });
          }
        });
        subjects.sort((a, b) => { return a.subject < b.subject ? -1 : 1; });
        if (subjects.length > 10) {
          subjects.unshift('Select Product');
        }
        productList = subjects;
      }
      catch(e) {
        productList = [];
      }

    }

    function populate() {
        try {
            var keys = Object.keys(productList);
            $('.pMenuWrap').after('<div class="pProductWrap"></div>');
            $('.headerText').append(bottomArrowTemplate);
            keys.forEach((key) => {
                var item = productList[key];
                var name = item.name;
                var el = menuItemTemplate
                    .replace('%ID%', item.subject)
                    .replace('%NAME%', item.subject);
                $('.pProductWrap').append(el);
            });
            $(document).find(".headerText").addClass('productMenu').attr('data-type', 'products');
        }
        catch(e) {
        }
    }

    this.toggleProductDropdown = function() {
        $(document).find(".headerText").removeClass('pSelected');
        $(document).find(".pProductWrap").slideUp();
    }

    this.populate = populate;
};

