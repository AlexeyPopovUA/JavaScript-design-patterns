(function () {
    "use strict";

    /**
     * This object contains simple methods which return "this". It makes possibility to call them (methods) in chain.
     * @type {{method1: method1, method2: method2, method3: method3}}
     */
    var MethodContainer = {

        /**
         * Simple method
         * @returns {MethodContainer}
         */
        method1: function () {
            print("method1 is called");

            return this;
        },

        /**
         * Simple method
         * @returns {MethodContainer}
         */
        method2: function () {
            print("method2 is called");

            return this;
        },

        /**
         * Simple method
         * @returns {MethodContainer}
         */
        method3: function () {
            print("method3 is called");

            return this;
        }
    };

    /**Testing*/

    MethodContainer.method1().method2().method3();
    print("");
    MethodContainer.method2().method1().method3();
})();