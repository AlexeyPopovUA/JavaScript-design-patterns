(function () {

    "use strict";

    /**
     * Event
     * @constructor
     */
    var Event = function () {
        this._observers = [];
    };

    Event.prototype = {

        constructor: Event,

        /**
         * Method that calls subscribed observers
         * @param data
         */
        raise: function (data) {
            this._observers.forEach(function (item) {
                item.observer.call(item.context, data);
            });
        },

        /**
         * Method that saves subscriptions
         * @param observer
         * @param context
         */
        subscribe: function (observer, context) {
            this._observers.push({
                observer: observer,
                context: context || null
            });
        },

        /**
         * Method that deletes subscriptions
         * @param observer
         * @param context
         */
        unsubscribe: function (observer, context) {
            var i;

            for (i = 0; i < this._observers.length; i++) {
                if (this._observers[i].observer === observer && this._observers[i].context === context) {
                    delete this._observers[i];
                }
            }
        }
    };

    /**Testing*/

    var event,
        obj1,
        obj2;

    event = new Event();

    obj1 = {
        _local: 123,

        fn: function (data) {
            print("Callback! with " + data + " and local = " + this._local);
        }
    };

    obj2 = {
        _local: 444,

        callback: function (data) {
            print("Callback2! with " + data + " and local2 = " + this._local);
        }
    };

    event.subscribe(obj1.fn, obj1);
    event.subscribe(obj2.callback, obj2);

    event.raise("data");

    event.unsubscribe(obj1.fn, obj1);

    event.raise("data new");

})();