import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
//import { textChangeRangeIsUnchanged } from 'typescript';

import indexRoutes from './routes/indexRoutes';
import gamesRoutes from './routes/gamesRoutes';

class Server {
    public app: Application;
    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }
    config(): void {
        this.app.set('port', process.env.PORT || 3000);
        //si existe tomar puerto sino tomar 3000
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        //server entiende json
        this.app.use(express.urlencoded({extended: false}))
        //en caso de enviar por formulario html
    }

    routes(): void {
        this.app.use('/',indexRoutes);
        this.app.use('/api/games',gamesRoutes);
    }
    
    start(): void {
        this.app.listen(this.app.get('port'), () =>{
            console.log('Server on port 3000', this.app.get('port'));
        });
    }
}

const server = new Server ();
server.start();
