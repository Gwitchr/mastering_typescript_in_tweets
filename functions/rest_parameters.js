function argumentosVariables() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    for (var i in args) {
        console.log("argumento #".concat(i, " = ").concat(args[i], " \u26A0\uFE0F"));
    }
}
argumentosVariables();
argumentosVariables("🦉", "🦢", "🐓");
argumentosVariables(1, 3, 2);
