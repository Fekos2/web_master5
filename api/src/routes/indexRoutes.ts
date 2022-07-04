import { Router } from 'express'

import { indexController } from './controllers/indexController';

class IndexRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', indexController.index);
        //para la ruta inicial  devolver un mensaje hello
    }
}

const indexRoutes = new IndexRoutes();
export default indexRoutes.router;