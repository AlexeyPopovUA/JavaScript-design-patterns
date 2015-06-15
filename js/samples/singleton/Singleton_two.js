(function () {

    "use strict";

    var Singleton_two;

    (function () {
        var instance;

        Singleton_two = function () {
            if (instance) {
                return instance;
            }

            /**
             * Instance that will be created only once
             * @type {{_counter: number, log: log}}
             */
            instance = {
                /**
                 * Counter
                 */
                _counter: 0,

                /**
                 * Method that prints something
                 * @param text {string}
                 */
                log: function (text) {
                    this._counter += 1;
                    print("Singleton two says: " + text);
                    print("Singleton's two counter: " + this._counter);
                }
            };

            return instance;
        };

    })();


    /**Testing*/

    var cloneST2,
        cloneST,
        ST;

    ST = new Singleton_two();

    ST.log("test!");
    ST.log("test2!");
    ST.log("test3!");
    print("--------------------------");

    cloneST = new Singleton_two();
    cloneST.log("cloned");

    print("--------------------------");

    cloneST2 = new Singleton_two();
    cloneST2.log("clone2");
    cloneST2.log("clone2");
    cloneST2.log("clone2");

})();