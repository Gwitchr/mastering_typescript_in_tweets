"use strict";
var ClaseES6 = /** @class */ (function () {
    function ClaseES6(id) {
        this._id = id;
    }
    Object.defineProperty(ClaseES6.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    return ClaseES6;
}());
