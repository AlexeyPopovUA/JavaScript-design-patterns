(function () {

    "use strict";

    /**
     * Product class constructor
     * @param name {string} - name of th product
     * @param price {number} - price of the product
     * @constructor
     */
    var Product = function (name, price) {
        this._name = name;
        this._price = price;
    };

    Product.prototype = {
        constructor: Product,

        /**
         * Returns string representation of the product properties
         * @returns {string}
         */
        toString: function () {
            return this._name + ": $" + this._price;
        }
    };

    var simpleModule = (function () {
        var basket = [];

        return {
            /**
             * Returns a quantity of products in a basket
             * @returns {Number}
             */
            getCount: function () {
                return basket.length;
            },

            /**
             * This method adds product to the basket
             * @param product {Product}
             */
            addProduct: function (product) {
                basket.push(product);
            },

            /**
             * Returns total list of products
             * @returns {string}
             */
            getProductList: function () {
                var result = "",
                    i;

                for (i = 0; i < basket.length; i++) {
                    result += basket[i].toString() + "<br />";
                }

                return result;
            }
        };
    })();

    print(simpleModule.getCount());
    simpleModule.addProduct(new Product("prod1", 12.23));
    simpleModule.addProduct(new Product("prod2", 42.26));
    simpleModule.addProduct(new Product("prod3", 47.00));
    print(simpleModule.getCount());
    print(simpleModule.getProductList());
    print("Trying to get the @private basket array from the module: simpleModule.basket == " + simpleModule.basket);

})();