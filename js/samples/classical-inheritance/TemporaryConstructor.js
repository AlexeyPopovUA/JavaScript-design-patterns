(function () {
    "use strict";

    function inherit(toObj, fromObj) {
        var Proxy = function () {};

        Proxy.prototype = fromObj.prototype;
        toObj.prototype = new Proxy();
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

    print("child.prop1 == " + child.prop1);
    print("parent.prop1 == " + parent.prop1);

    Parent.prototype.prop1 = "modified Parent prop1";

    print("child.prop1 == " + child.prop1);
    print("parent.prop1 == " + parent.prop1);
    print("");
    print("parent.a == " + parent.a);
    print("child.a == " + child.a);

})();