(function () {
    "use strict";

    function ClassOne() {
        this.prop1 = "123";
        this.prop2 = {a: 21};
    }

    function ClassTwo() {
        this.prop3 = ["qwe", 45];
    }

    /**
     * This constructor demonstrates "Rent a constructor multiple inheritance" pattern
     * @constructor
     */
    function RentAConstructorMultiple() {
        ClassOne.apply(this, arguments);
        ClassTwo.apply(this, arguments);

        this.prop4 = "prop4";
    }

    /**Testing*/

    var multiInherited = new RentAConstructorMultiple();

    print("multiInherited.prop1 = " + multiInherited.prop1);
    print("multiInherited.prop2 = " + multiInherited.prop2);
    print("multiInherited.prop3 = " + multiInherited.prop3);
    print("multiInherited.prop4 = " + multiInherited.prop4);
})();