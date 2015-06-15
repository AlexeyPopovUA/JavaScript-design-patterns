(function () {
    "use strict";

    var testFn,
        conf;

    /**
     * This function prints all strigified properties of the configuration object and one of the properties it prints separately
     * @param configuration {Object}
     */
    testFn = function (configuration) {
        var property;

        print("All properties:");
        for (property in configuration) {
            if (configuration.hasOwnProperty(property)) {
                print(JSON.stringify(configuration[property]));
            }
        }

        print("Property \"property2\" value == " + configuration.property2);
    };

    /**Testing*/

    conf = {
        property1: 123,
        property2: "test",
        property3: [
            1,
            "123",
            {}
        ]
    };

    testFn(conf);
})();