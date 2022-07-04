import { Router } from 'express'

import  gamesController from './controllers/gamesController'

class GamesRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', gamesController.list);
        //todos
        this.router.get('/:Contrasena', gamesController.getOne);
        //para uno solo
        //para la ruta inicial  devolver un mensaje hello
        this.router.post('/', gamesController.create);
        this.router.delete('/:Nombre', gamesController.delete);
        this.router.put('/:Nombre', gamesController.update);
    }
}

const gamesRoutes = new GamesRoutes();
export default gamesRoutes.router;