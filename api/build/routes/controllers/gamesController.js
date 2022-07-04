"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../../database"));
class GamesController {
    list(req, res) {
        database_1.default.query('SELECT * FROM registrate', function (err, rows, fields) {
            if (err)
                throw err;
            const games = rows;
            res.json(games);
        });
    }
    getOne(req, res) {
        const { Contrasena } = req.params;
        database_1.default.query('SELECT * FROM registrate WHERE Contrasena=?', [Contrasena], function (err, rows, fields) {
            if (err)
                throw err;
            const games = rows;
            res.json(games);
        });
    }
    create(req, res) {
        database_1.default.query('INSERT INTO registrate set ?', [req.body]);
        //datos de angular
        res.json({ message: 'creating a game' });
    }
    delete(req, res) {
        res.json({ text: 'deleting a game ' + req.params.nombre });
    }
    update(req, res) {
        res.json({ text: 'updating a game ' + req.params.nombre });
    }
}
const gamesController = new GamesController();
exports.default = gamesController;
