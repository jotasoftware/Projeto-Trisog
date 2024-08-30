import express from "express";
import {router} from './router'
import cors from 'cors';

export class App{
    public server: express.Application;
    constructor(){
        this.server = express();
        this.middleware()
        this.cors()
        this.router()
    }
    private middleware() {
        this.server.use(express.json())
    }
    private router(){
        this.server.use(router)
    }
    private cors(){
        this.server.use(cors())
    }
}