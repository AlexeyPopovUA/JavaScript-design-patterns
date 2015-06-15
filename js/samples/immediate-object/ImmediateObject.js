(function () {
    "use strict";

    /**
     * Object that will be initialized
     */
    ({
        width: 100,
        height: 200,

        getProperties: function(){
            print("Width: " + this.width + "px, height: " + this.height + "px");
        },

        init: function () {
            print("Init");
            this.getProperties();
        }
    }).init();

})();