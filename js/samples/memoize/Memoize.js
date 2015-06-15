(function () {

    "use strict";

    /**
     * Heavy calculations function with cache (static container)
     * @param x {number}
     * @param y {number}
     * @returns {number}
     */
    function heavyCalc(x, y) {
        var key = x.toString() + "-" + y.toString(),
            result = 0;

        if (!heavyCalc.cache[key]) {
            var i;

            for (i = 0; i <= y; i++) {
                result += x;
            }
            heavyCalc.cache[key] = result;
        }

        return heavyCalc.cache[key];
    }

    heavyCalc.cache = {};

    /**Testing*/
    print("Look to your console");
    console.profile();
    print(heavyCalc(1, 100000000));
    console.log(heavyCalc.cache);
    console.profileEnd();

    console.profile();
    print(heavyCalc(1, 100000000));
    console.log(heavyCalc.cache);
    console.profileEnd();

    console.profile();
    print(heavyCalc(1, 100000000));
    console.log(heavyCalc.cache);
    console.profileEnd();

    console.profile();
    print(heavyCalc(2, 100000000));
    console.log(heavyCalc.cache);
    console.profileEnd();

    console.profile();
    print(heavyCalc(2, 100000000));
    console.log(heavyCalc.cache);
    console.profileEnd();

})();