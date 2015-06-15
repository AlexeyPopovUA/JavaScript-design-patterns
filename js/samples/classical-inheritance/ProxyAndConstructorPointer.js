(function () {
    "use strict";

    var inherit,
        child,
        parent;

    /**
     * Inheritance implementation with Proxy saving, uber pointer and the correct constructor pointer
     * @returns {Function}
     */
    function inheritance() {
        /**
         * There is no need to create new Proxy for each inheritance
         * @constructor
         */
        var Proxy = function () {};

        return function (ToClass, FromClass) {
            Proxy.prototype = FromClass.prototype;
            ToClass.prototype = new Proxy();
            ToClass.uber = FromClass.prototype;
            ToClass.prototype.constructor = ToClass;
        };
    }

    inherit = inheritance();

    function Parent() {
        this.a = "a";
    }
    Parent.prototype.prop1 = "prop1 value";

    function Child() {}

    inherit(Child, Parent);

    /**Testing*/

    child = new Child();
    parent = new Parent();

    print("@public prototype child.prop1 == " + child.prop1);
    print("@public prototype parent.prop1 == " + parent.prop1);

    Parent.prototype.prop1 = "modified Parent prop1";

    print("@public prototype modified child.prop1 == " + child.prop1);
    print("@public prototype modified parent.prop1 == " + parent.prop1);
    print("");
    print("@private parent.a == " + parent.a);
    print("@private child.a == " + child.a);
    print("");
    print("Child.prototype.constructor.name == " + Child.prototype.constructor.name);
    print("Parent.prototype.constructor.name == " + Parent.prototype.constructor.name);
    print("Child.uber.name == " + Child.uber.constructor.name);

})();