(function () {
    "use strict";

    /**
     * Implements inheritance pattern "prototype sharing"
     * @param toObj {Function}
     * @param fromObj {Function}
     */
    function inherit(toObj, fromObj) {
        toObj.prototype = fromObj.prototype;
    }

    function Parent() {
        this.a = "a";
    }
    Parent.prototype.prop1 = "prop1 value";
    function Child() {}
    inherit(Child, Parent);

    /**Testing*/

    var child = new Child(),
        parent = new Parent();

    print("");
    print("child.prop1 == " + child.prop1);
    print("parent.prop1 == " + parent.prop1);

    Parent.prototype.prop1 = "modified Parent prop1";

    print("child.prop1 == " + child.prop1);
    print("parent.prop1 == " + parent.prop1);
    print("");
    print("parent.a == " + parent.a);
    print("child.a == " + child.a);
})();