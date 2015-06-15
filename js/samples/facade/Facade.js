(function () {

    "use strict";

    /**
     * This is a simple module, that contains some object with own methods
     * (for example, it can be a module written in another framework).
     */
    var module = (function () {
        /**
         * Inner module
         * @type {{i: number, get: get, set: set, run: run, jump: jump}}
         * @private
         */
        var _private = {

            /**
             * Simple property
             */
            i: 0,

            /**
             * Getter
             */
            get: function () {
                print("Value = " + this.i);
            },

            /**
             * Setter
             * @param value {number}
             */
            set: function (value) {
                this.i = value;
            },

            /**
             * Start some process
             */
            run: function () {
                print("Process was started");
            },

            /**
             * Change some process
             */
            jump: function () {
                print("Abrupt change");
            }
        };

        return {
            /**
             * Public method that helps to translate actions between modules
             * @param args
             */
            facade: function (args) {
                _private.set(args.value);
                _private.get();
                if (args.run) {
                    _private.run();
                }
            }
        };
    })();

    /**Testing*/

    module.facade({run: true, value: 123});
})();