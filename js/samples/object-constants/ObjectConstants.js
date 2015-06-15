(function () {
    "use strict";

    /**
     * This module have an ability to contain constants.
     * No one can reinitialize any of already initialized constants
     */
    var module = (function () {
        var constants = {},
            hasOwnProperty = Object.prototype.hasOwnProperty,
            prefix = (Math.random() + "_").slice(2),
            isAllowed;

        /**
         * This private method checks if value is acceptable
         * @param value {String|Number|Boolean} - the value of the constant
         * @returns {boolean}
         * @private
         */
        isAllowed = function (value) {
            switch (typeof value) {
            case "number":
                return true;
            case "string":
                return true;
            case "boolean":
                return true;
            default:
                return false;
            }
        };

        return {
            /**
             * Constant getter
             * @param name {String} - the name of the constant
             * @returns {String|Number|Boolean|null}
             */
            getConstant: function (name) {
                if (this.isDefined(name) === true) {
                    return constants[prefix + name];
                }

                return undefined;
            },

            /**
             * Setter
             * @param name {String} - the name of the constant
             * @param value {String|Number|Boolean} - the value of the constant
             * @returns {boolean}
             */
            setConstant: function (name, value) {
                if (isAllowed(value) !== true) {
                    return false;
                }

                if (this.isDefined(name) === true) {
                    return false;
                }

                constants[prefix + name] = value;

                return true;
            },

            /**
             * This method checks if constant is already defined
             * @param name {String} - the name of the constant
             * @returns {boolean}
             */
            isDefined: function (name) {
                return hasOwnProperty.call(constants, prefix + name);
            }
        };
    })();

    /**Testing*/

    module.setConstant("test", 123);
    print("test == " + module.getConstant("test"));
    print("idDefined(\"test\") == " + module.isDefined("test"));
    print("test2 == " + module.getConstant("test2"));
    print("idDefined(\"test2\") == " + module.isDefined("test2"));
    print("");
    module.setConstant("test", 321);
    print("test == " + module.getConstant("test"));
    print("");
    module.setConstant("test3", {a: 123});
    print("test3 == " + module.getConstant("test3"));


})();