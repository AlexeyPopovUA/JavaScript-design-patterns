(function () {

    "use strict";

    /**
     * Basic Ball class
     * @param radius {number}
     * @param color {string}
     * @constructor
     */
    function Ball(radius, color) {
        this._radius = radius;
        this._color = color;

    }

    Ball.prototype = {
        constructor: Ball,

        INCREMENTATION_STEP: 10,

        info: function () {
            print("radius: " + this._radius);
            print("color: " + this._color);
        },

        draw: function () {
            print("I'm a " + this._color + " ball");
        },

        inc: function () {
            this._radius += this.INCREMENTATION_STEP;
            print("Now my increased radius is " + this._radius);
        }

    };


    /**
     * Class of Ball decorated with stripes
     * @param ball {Ball}
     * @constructor
     */
    function StrippedBall(ball) {
        this._ball = ball;
    }

    StrippedBall.prototype = {
        constructor: StrippedBall,

        info: function () {
            this._ball.info();
        },

        draw: function () {
            this._ball.draw();
            print("With stripes!");
        },

        inc: function () {
            this._ball.inc();
            print("Additional inc action!");
        }
    };

    /**
     * Class of Ball decorated with dots
     * @param ball {Ball}
     * @constructor
     */
    function DottedBall(ball) {
        this._ball = ball;
    }

    DottedBall.prototype = {
        constructor: DottedBall,

        info: function () {
            this._ball.info();
        },

        draw: function () {
            this._ball.draw();
            print("With dots!");
        },

        inc: function () {
            this._ball.inc();
            print("Additional inc action!");
        }
    };


    /**Testing*/
    print("Basic ball:");
    var basicBall = new Ball(15, "red");
    basicBall.draw();
    basicBall.info();
    basicBall.inc();
    print("=============================");

    print("Striped ball:");
    var stripedBall = new StrippedBall(basicBall);
    stripedBall.draw();
    stripedBall.info();
    stripedBall.inc();
    print("=============================");

    print("Dotted ball:");
    var dottedBall = new DottedBall(basicBall);
    dottedBall.draw();
    dottedBall.info();
    dottedBall.inc();
    print("=============================");


})();