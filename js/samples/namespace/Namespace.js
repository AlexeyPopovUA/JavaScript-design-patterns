(function () {
    "use strict";

    /**
     * Object that contains namespacing tools
     * @type {{create: create}}
     */
    var namespace = {
        /**
         * This method creates object in the global scope according to the namespace
         * @param namespace {String} - namespace. For example, "App.utils.CommonUtils"
         */
        create: function (namespace) {
            var parts = namespace.split('.'),
                parent = parts[0],
                i;

            parts = parts.slice(1);

            if (window[parent] === undefined) {
                window[parent] = {};
            }

            parent = window[parent];

            for (i = 0; i < parts.length; i += 1) {
                if (parent[parts[i]] === undefined) {
                    parent[parts[i]] = {};
                }

                parent = parent[parts[i]];
            }
        }
    };

    /**Testing*/

    namespace.create("App.utils.CommonUtils");
    print("Testing App.utils.CommonUtils namespace: ");
    print(JSON.stringify(App, null, 4));
    print("");
    print("Testing App.utils.ViewUtils namespace: ");
    namespace.create("App.utils.ViewUtils");
    print(JSON.stringify(App, null, 4));

})();