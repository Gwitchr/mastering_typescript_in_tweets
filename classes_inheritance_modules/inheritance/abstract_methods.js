var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var AnimalBase = /** @class */ (function () {
    function AnimalBase(id, clase) {
        this.reino = "animal";
        this.clase = clase;
        this.id = id;
    }
    return AnimalBase;
}());
var AbejaObrera = /** @class */ (function (_super) {
    __extends(AbejaObrera, _super);
    function AbejaObrera() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AbejaObrera.prototype.trabajar = function () {
        console.log("Este animal ".concat(this.clase, " Ahora estoy trabajando  \u26A0\uFE0F"));
    };
    return AbejaObrera;
}(AnimalBase));
var AbejaReina = /** @class */ (function (_super) {
    __extends(AbejaReina, _super);
    function AbejaReina() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.subditos = [];
        return _this;
    }
    AbejaReina.prototype.administrarReino = function () {
        _super.prototype.trabajar.call(this);
        for (var _i = 0, _a = this.subditos; _i < _a.length; _i++) {
            var abeja = _a[_i];
            abeja.trabajar();
        }
    };
    return AbejaReina;
}(AbejaObrera));
var abeja1 = new AbejaObrera("1", "🐝");
var abejaReina = new AbejaReina("0", "🐝");
abeja1.trabajar();
