(function (type) {
    "use strict";
    /**
     * This object contains methods and properties that will be initialized once on load time
     * @type {{method1: null, property2: null}}
     */
    var utils = {
        method1: null,
        property2: null
    };

    (function () {
        if (type === 1) {
            utils.method1 = function () {
                print("Type == " + type + ". method1");
            };
            utils.property2 = type;
        } else {
            utils.method1 = function () {
                print("Default. Type == " + type + ". method1");
            };
            utils.property2 = type;
        }
    })();

    /**Testing*/

    print("Testing:");
    utils.method1();
    print(utils.property2);

})(2);