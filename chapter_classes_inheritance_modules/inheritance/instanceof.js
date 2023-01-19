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
var BaseUno = /** @class */ (function () {
    function BaseUno() {
    }
    return BaseUno;
}());
var DosExtiendeUno = /** @class */ (function (_super) {
    __extends(DosExtiendeUno, _super);
    function DosExtiendeUno() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return DosExtiendeUno;
}(BaseUno));
var TresExtiendeUno = /** @class */ (function (_super) {
    __extends(TresExtiendeUno, _super);
    function TresExtiendeUno() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return TresExtiendeUno;
}(BaseUno));
var CuatroExtiendeTres = /** @class */ (function (_super) {
    __extends(CuatroExtiendeTres, _super);
    function CuatroExtiendeTres() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CuatroExtiendeTres;
}(TresExtiendeUno));
console.log("".concat(new BaseUno() instanceof BaseUno, " \u26A0\uFE0F")); // true
console.log("".concat(new DosExtiendeUno() instanceof BaseUno, " \u26A0\uFE0F")); // true
console.log("".concat(new DosExtiendeUno() instanceof DosExtiendeUno, " \u26A0\uFE0F")); // true
console.log("".concat(new CuatroExtiendeTres() instanceof BaseUno, " \u26A0\uFE0F")); // true
console.log("".concat(new TresExtiendeUno() instanceof DosExtiendeUno, " \u26A0\uFE0F")); // false
