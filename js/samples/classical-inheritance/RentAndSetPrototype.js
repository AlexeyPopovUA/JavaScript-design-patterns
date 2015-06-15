(function () {
    "use strict";

    function Parent(name) {
        this.name = name || "Parent";
    }

    Parent.prototype.say = function () {
        print("name = " + this.name);
    };

    /**
     * Renting constructor + setting the Child.prototype = new Parent
     * @param name
     * @constructor
     */
    function Child(name) {
        Parent.apply(this, arguments);
    }
    Child.prototype = new Parent();

    /**Testing*/
    var child = new Child("Child");
    print("child.name == " + child.name);
    child.say();
    delete child.name;
    child.say();

})();