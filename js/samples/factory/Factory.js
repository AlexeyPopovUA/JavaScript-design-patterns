(function () {

    "use strict";

    /**
     * Shapes collection
     * @type {{Circle: Circle, Rectangle: Rectangle, Triangle: Triangle}}
     */
    var Shapes = {

        /**
         * Circle constructor
         * @param parameters
         * @constructor
         */
        Circle: function (parameters) {
            print(parameters.color + " circle with " + parameters.size + "px radius was created");
        },

        /**
         * Rectangle constructor
         * @param parameters
         * @constructor
         */
        Rectangle: function (parameters) {
            print(parameters.color + " rectangle with " + parameters.size + "px side was created");
        },

        /**
         * Triangle constructor
         * @param parameters
         * @constructor
         */
        Triangle: function (parameters) {
            print(parameters.color + " triangle with " + parameters.size + "px side was created");
        }
    };

    /**
     * Factory constructor
     * @param size {number}
     * @param color {string}
     * @constructor
     */
    var ShapeFactory = function (size, color) {
        this._color = color;
        this._size = size;
    };

    /**
     * Factory methods for constructors invocation
     * @type {{constructor: ShapeFactory, createCircle: createCircle, createRectangle: createRectangle, createTriangle: createTriangle}}
     */
    ShapeFactory.prototype = {
        constructor: ShapeFactory,

        /**
         * Creates Circles
         * @returns {Shapes.Circle}
         */
        createCircle: function () {
            return new Shapes.Circle({
                size: this._size,
                color: this._color
            });
        },

        /**
         * Creates Rectangle
         * @returns {Shapes.Rectangle}
         */
        createRectangle: function () {
            return new Shapes.Rectangle({
                size: this._size,
                color: this._color
            });
        },

        /**
         * Creates Triangle
         * @returns {Shapes.Triangle}
         */
        createTriangle: function () {
            return new Shapes.Triangle({
                size: this._size,
                color: this._color
            });
        }

    };


    /**Testing*/

    var factory = new ShapeFactory(123, "red");

    factory.createCircle();
    factory.createRectangle();
    factory.createTriangle();

})();