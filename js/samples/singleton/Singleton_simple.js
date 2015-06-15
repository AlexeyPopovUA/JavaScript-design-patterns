(function () {

    "use strict";

    /**
     * Simple singleton
     * @type {{log: log}}
     */
    var Singleton_simple = {
        /**
         * Prints text
         * @param text {string} - text to print
         */
        log: function (text) {
            print("Simple singleton says: " + text);
        }
    };

    /**Testing*/

    Singleton_simple.log("Hello!");
    Singleton_simple.log("World!");

})();