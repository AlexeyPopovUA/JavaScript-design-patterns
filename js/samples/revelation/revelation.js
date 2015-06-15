(function () {
    "use strict";

    var myArrayUtils;

    (function () {
        var arrayString = "[object Array]",
            toString = Object.prototype.toString;

        function isArray(arr) {
            return toString.call(arr) === arrayString;
        }

        /**
         * This method will be saved in a duplicated property
         * @param arr {Array}
         * @param item {*}
         * @returns {Number}
         */
        function indexOf(arr, item) {
            var i,
                length = arr.length;

            for (i = 0; i < length; i += 1) {
                if (arr[i] === item) {
                    return i;
                }
            }

            return -1;
        }

        myArrayUtils = {
            isArray: isArray,
            indexOf: indexOf, //Origin method
            inArray: indexOf  //Saved method
        };

        print("myArrayUtils.isArray({a: 1, b: 4}) === " + myArrayUtils.isArray({a: 1, b: 4}));
        print("myArrayUtils.isArray([1, \"123\", {a: 3}]) === " + myArrayUtils.isArray([1, "123", {a: 3}]));
        print("myArrayUtils.indexOf([1, 2, 45, 56, 76], 45) ===" + myArrayUtils.indexOf([1, 2, 45, 56, 76], 45));
        print("myArrayUtils.inArray([1, 2, 45, 56, 76], 45) === " + myArrayUtils.inArray([1, 2, 45, 56, 76], 45));
        print("");
        print("Something happened with indexOf method. Checking saved copy in \"inArray\" method: ");
        myArrayUtils.indexOf = null;
        print("myArrayUtils.inArray([1, 2, 45, 56, 76], 45) === " + myArrayUtils.inArray([1, 2, 45, 56, 76], 45));

    })();
})();