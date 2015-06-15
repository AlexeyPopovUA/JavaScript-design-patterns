(function () {
    "use strict";

    /**
     * It will add "method" method to the Function's prototype
     */
    if (typeof Function.prototype.method === "undefined") {
        /**
         * This method adds user defined methods to the constructor's prototype
         * @param name {String} - method name
         * @param body {Function} - method implementation
         * @returns {Function} - constructor for "chaining"
         */
        Function.prototype.method = function (name, body) {
            if (typeof this.prototype[name] === "undefined") {
                this.prototype[name] = body;

                return this;
            }
        };
    }

    /**Testing*/

    function TestConstructor(param) {
        this.a = param;
    }

    TestConstructor.method("getA", function () {
        return this.a;
    });

    TestConstructor.method("setA", function (a) {
        this.a = a;

        return this;
    });

    var test = new TestConstructor();

    print("test.a = " + test.a);

    test.setA(123);

    print("test.getA() = " + test.getA());

})();