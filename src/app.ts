
import route from "./routes";
import http from "http";
import express, { Application } from 'express';
const mysql = require("mysql2");
import 'dotenv/config'
import cors from "cors";
import morgan from "morgan";
import { db } from "./database/conection";
class Server{
    private app: Application;
    private port:string;
    private static _intance: Server;
    private Server: http.Server;

    constructor(){
        this.app = express();
        this.middlewares();
        this.routes();
        this.ConectionDB();
        this.port = process.env.PORT || "3000";
        this.Server = new http.Server(this.app);
    }

    async listen(){
        try {
            this.Server.listen(this.port, () => {
                console.log("Servidor corriendo en puerto " + this.port);
              });
           /**
            *  console.log(process.env.PORT)
            await sequelize.sync({alter:true});
            console.log("database connected")
            this.app.listen(this.port,() => {
                console.log('SERVIDOR CORRIENDO EN PUERTO ' + this.port);
                
            })
            */
        } catch (error) {
            console.log(error);
        }
     
    }

    public static get instance() {
        return this._intance || (this._intance = new this());
      }

      routes() {
     
        this.app.use(`/api/v1/cards`, route);
    
        this.app.use((req, res, next) => {
          const err: any = new Error("Not Found");
          err.status = 404;
          next(err);
        });
    
        this.app.use((err, req, res, next) => {
          console.log(err.stack);
    
          res.status(err.status || 500);
          res.json({
            statusCode: err.status || 500,
            errors: {
              message: err.message,
              error: err,
            },
          });
        });
      }
     
      middlewares() {
        this.app.use(cors()); //
        this.app.use(express.urlencoded({ extended: false }));
        this.app.use(express.json());
        this.app.use(morgan("dev"));
      }
  
       async dbConection(out: boolean) {
        try {
          if (out) {
            return true;
          } else {
            await db.authenticate();
            console.log("Database is connect!");
            return true;
          }
        } catch (error: any) {
          console.error(error);
          // db.close();
          setTimeout(() => {
            return this.dbConection(false);
          }, 5000);
          //  throw new Error(error);
        }
      }

        
      async ConectionDB() {
   
        (async () => {
          try {
            await this.dbConection(false);
          } catch (error) {
            console.error(error);
            throw new Error(error);
          }
        })();
      }
       
}



const server = new Server();
server.listen();
/**   // "dev": "tsx --watch src/server.ts"*/