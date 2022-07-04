import { Request, Response } from 'express';
import pool from '../../database';

class GamesController {
    
    public list (req: Request, res: Response){
        pool.query('SELECT * FROM registrate', function(err, rows, fields){
            if (err) throw err;
            const games = rows;
            res.json(games);
        });
    }

    public  getOne(req:Request, res: Response){
        const {Contrasena} = req.params;
        pool.query('SELECT * FROM registrate WHERE Contrasena=?',[Contrasena], function(err, rows, fields){
            if (err) throw err;
            const games = rows;
            res.json(games);
        });
    }

    public create (req: Request, res: Response){
        pool.query('INSERT INTO registrate set ?',[req.body]);
        //datos de angular
        res.json({message:'creating a game'});
    }
    
    public delete (req: Request, res:Response){
        res.json({text: 'deleting a game '+ req.params.nombre});
    }

    public update (req: Request ,res:Response){
        res.json({text: 'updating a game ' + req.params.nombre});
    }
}

const gamesController = new GamesController();
export default gamesController;