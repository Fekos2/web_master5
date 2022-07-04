"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const gamesController_1 = __importDefault(require("./controllers/gamesController"));
class GamesRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', gamesController_1.default.list);
        //todos
        this.router.get('/:Contrasena', gamesController_1.default.getOne);
        //para uno solo
        //para la ruta inicial  devolver un mensaje hello
        this.router.post('/', gamesController_1.default.create);
        this.router.delete('/:Nombre', gamesController_1.default.delete);
        this.router.put('/:Nombre', gamesController_1.default.update);
    }
}
const gamesRoutes = new GamesRoutes();
exports.default = gamesRoutes.router;
