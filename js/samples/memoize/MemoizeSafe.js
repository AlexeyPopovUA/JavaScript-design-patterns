(function () {

    "use strict";

    /**
     * Calculation function
     * @param x {number}
     * @param y {number}
     * @returns {number}
     */
    var Calculation = function (x, y) {
        var result = 0,
            i;

        for (i = 0; i < x; i++) {
            result += y;
        }

        return result;
    };

    /**
     * Memoization mechanism is applied to all functions
     * @returns {Function}
     */
    Function.prototype.memoize = function () {
        var me = this,
            memory = {};

        return function (arg1, arg2) {
            var key = arg1 + "-" + arg2;

            if (memory[key]) {
                print("Value already exists: " + memory[key]);
                return memory[key];
            }

            print("New value will be added");
            memory[key] = me.apply(null, arguments);
        };
    };

    /**Testing*/

    var memoCalc = Calculation.memoize();

    console.profile();
    print("100000000|1 = " + memoCalc(100000000, 1));
    console.profileEnd();
    console.profile();
    print("100000000|1 = " + memoCalc(100000000, 1));
    console.profileEnd();
    console.profile();
    print("100000000|1 = " + memoCalc(100000000, 1));
    console.profileEnd();
    console.profile();
    print("100000000|1 = " + memoCalc(100000000, 1));
    console.profileEnd();
    print();
    console.profile();
    print("100000000|2 = " + memoCalc(100000000, 2));
    console.profileEnd();
    console.profile();
    print("100000000|2 = " + memoCalc(100000000, 2));
    console.profileEnd();

})();