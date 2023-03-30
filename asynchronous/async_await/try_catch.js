"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const delayed_1 = require("./delayed");
function llamarPromesaFallida() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            console.log(`Llamando 📞... ⚠️`);
            yield (0, delayed_1.promesaFallida)();
        }
        catch (error) {
            console.log(`Todo me sale mal 🤡 ${error === null || error === void 0 ? void 0 : error.toString()} ⚠️`);
        }
    });
}
llamarPromesaFallida();
// Llamando 📞... ⚠️
// Promesa fallida después de 1000ms 😭 ⚠️
// Todo me sale mal 🤡 muy mal ⚠️
