(function () {

    "use strict";

    /**
     * This is a typical Mediator. It has links to all objects. Correlations between objects can be performed using the Mediator.
     * @type {{obj1: Object1, obj2: Object2, medAction1: medAction1, medAction2: medAction2}}
     */
    var Mediator = {
        obj1: new Object1(),
        obj2: new Object2(),

        medAction1: function () {
            this.obj2.action2();
        },

        medAction2: function () {
            this.obj1.action2();
        }
    };

    /**
     * This is object that has no link to another object except {@link Mediator}
     * @constructor
     */
    var Object1 = function () {
    };


    Object1.prototype = {
        constructor: Object1,

        action1: function () {
            print("Object1 action1");
            Mediator.medAction1();
        },

        action2: function () {
            print("Object1 action2");
        }
    };
    /**
     * This is object that has no link to another object except {@link Mediator}
     * @constructor
     */
    var Object2 = function () {
    };


    Object2.prototype = {
        constructor: Object2,

        action1: function () {
            print("Object2 action1");
            Mediator.medAction2();
        },

        action2: function () {
            print("Object2 action2");
        }
    };

    /**Testing*/

    Mediator.obj1.action1();
    print("-------------------");
    Mediator.obj2.action1();
})();