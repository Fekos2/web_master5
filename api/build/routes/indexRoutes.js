"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const indexController_1 = require("./controllers/indexController");
class IndexRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', indexController_1.indexController.index);
        //para la ruta inicial  devolver un mensaje hello
    }
}
const indexRoutes = new IndexRoutes();
exports.default = indexRoutes.router;
