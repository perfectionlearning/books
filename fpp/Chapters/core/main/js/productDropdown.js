/*
 * Product dropdown menu
 */

var ProductDropdown = function() {
// bookSubjectMap provides a temporary mapping. This should be supplied from the server.
    const bookSubjectMap = {
        40: 'MathX Algebra 1',
        41: 'AMSCO Algebra 1',
        42: 'AMSCO Geometry',
        43: 'AMSCO Geometry',
        44: 'MathX Pre-Algebra',
        45: 'MathX Pre-Algebra',
        46: 'MathX Algebra 2',
        47: 'MathX Algebra 1',
        48: 'AMSCO Algebra I',
        49: 'MathX Geometry',
        50: 'MathX Geometry',
        51: 'AMSCO Pre-Algebra',
        52: 'AMSCO Pre-Algebra',
        53: 'MathX Algebra 2',
        54: 'AMSCO Algebra 2',
        55: 'AMSCO Algebra 2',
        56: 'MathX Algebra 1 TEKS',
        57: 'MathX Algebra 1 TEKS',
        58: 'MathX Algebra 2 TEKS',
        59: 'MathX Algebra 2 TEKS',
        60: 'MathX Geometry TEKS',
        61: 'MathX Geometry TEKS',
        62: 'First Person Physics TEKS',
        63: 'First Person Physics TEKS', 
        64: 'First Person Physics FL',
        65: 'First Person Physics FL',
        66: 'First Person Physics',
        67: 'First Person Physics',
        68: 'MathX Algebra 1 FL',
        69: 'MathX Algebra 1 FL',
        70: 'MathX Algebra 1 NY',
        71: 'MathX Algebra 1 NY'
    };

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
          var subject = bookSubjectMap[item.book_id];
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
        $(document).find('.headerText').addClass('productMenu').attr('data-type', 'products');
    }

    this.toggleProductDropdown = function() {
        $(document).find(".headerText").removeClass('pSelected');
        $(document).find(".pProductWrap").slideUp();
    }

    this.populate = populate;
};
