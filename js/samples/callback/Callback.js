(function () {
    "use strict";

    /**
     * Function that demonstrates callback pattern
     * @param items {Array<Object>}
     * @param callback {Function} [callback]
     * @param scope {Object}
     */
    function findItems(items, callback, scope) {
        var found = [];

        items.forEach(function (item) {
            if (callback !== undefined && typeof callback === "function") {
                if (callback.call(scope, item)) {
                    found.push(item);
                }
            }
        });

        return found;
    }

    /**
     * Callback
     * @param item {Object}
     */
    function markBiggerThanNumder(item) {
        if (item.a > 2) {
            item.b = "bigger than 2";

            return true;
        }

        return false;
    }

    /**Testing*/

    var testArray = [{a: 1}, {a: 2}, {a: 3}];

    print("Before modification:");
    print(JSON.stringify(testArray));
    print("");
    print("After modification:");
    print(JSON.stringify(findItems(testArray, markBiggerThanNumder, null)));

})();