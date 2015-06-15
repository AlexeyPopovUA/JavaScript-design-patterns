(function () {
    "use strict";

    /**
     * Recursive currying function. Any function can be partially applied for many times
     * @param fn {Function} - function to be curried
     * @returns {*} - partialy applied function or [fn] result
     */
    function curry(fn) {
        var sliceFn = Array.prototype.slice,
            savedArgs = sliceFn.call(arguments, 1);

        return function saveArgsFn() {
            var newArgs = sliceFn.call(arguments),
                args = savedArgs.concat(newArgs);

            if (args.length < fn.length) {
                return curry.apply(null, [fn].concat(args));
            }

            return fn.apply(null, args);
        };
    }

    /**Testing*/

    function add(a, b, c, d) {
        return a + b + c + d;
    }

    var newAddOne = curry(add, 1),
        newAddTwo = curry(add, 5, 10);

    print("Checking function newAddOne(2): " + typeof newAddOne(2));
    print("Checking function newAddOne(2, 3): " + typeof newAddOne(2, 3));
    print("Checking function newAddOne(2, 3, 4) result: " + newAddOne(2, 3, 4));
    print("Checking function newAddOne(2, 3)(4) result: " + newAddOne(2, 3)(4));
    print("Checking function newAddOne(2)(3)(4) result: " + newAddOne(2)(3)(4));
    print("");
    print("Checking function newAddTwo(15): " + typeof newAddTwo(15));
    print("Checking function newAddTwo(20, 25) result: " + newAddTwo(20, 25));
    print("Checking function newAddTwo(20)(30) result: " + newAddTwo(20)(30));
})();