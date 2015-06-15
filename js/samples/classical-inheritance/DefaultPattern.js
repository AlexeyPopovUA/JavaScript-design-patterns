(function () {
    "use strict";

    /**
     * Inheritance function creates prototype object for the child constructor
     * @param ToConstructor {Function}
     * @param FromConstructor {Function}
     */
    function inherit (ToConstructor, FromConstructor) {
        ToConstructor.prototype = new FromConstructor();
    }

    /**Testing*/

    function Parent(name) {
        this.name = name || "Default";
    }

    Parent.prototype.say = function () {
        print("My name is " + this.name);
    };

    function Child(name) {}

    inherit(Child, Parent);

    var test = new Child("Test");

    print("test.name == " + test.name);
    test.say();
})();