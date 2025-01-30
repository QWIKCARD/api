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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const routes_1 = __importDefault(require("./routes"));
const http_1 = __importDefault(require("http"));
const express_1 = __importDefault(require("express"));
const mysql = require("mysql2");
require("dotenv/config");
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const conection_1 = require("./database/conection");
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.middlewares();
        this.routes();
        this.ConectionDB();
        this.port = process.env.PORT || "3000";
        this.Server = new http_1.default.Server(this.app);
    }
    listen() {
        return __awaiter(this, void 0, void 0, function* () {
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
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    static get instance() {
        return this._intance || (this._intance = new this());
    }
    routes() {
        this.app.use(`/api/v1/cards`, routes_1.default);
        this.app.use((req, res, next) => {
            const err = new Error("Not Found");
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
        this.app.use((0, cors_1.default)()); //
        this.app.use(express_1.default.urlencoded({ extended: false }));
        this.app.use(express_1.default.json());
        this.app.use((0, morgan_1.default)("dev"));
    }
    dbConection(out) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (out) {
                    return true;
                }
                else {
                    yield conection_1.db.authenticate();
                    console.log("Database is connect!");
                    return true;
                }
            }
            catch (error) {
                console.error(error);
                // db.close();
                setTimeout(() => {
                    return this.dbConection(false);
                }, 5000);
                //  throw new Error(error);
            }
        });
    }
    ConectionDB() {
        return __awaiter(this, void 0, void 0, function* () {
            (() => __awaiter(this, void 0, void 0, function* () {
                try {
                    yield this.dbConection(false);
                }
                catch (error) {
                    console.error(error);
                    throw new Error(error);
                }
            }))();
        });
    }
}
const server = new Server();
server.listen();
/**   // "dev": "tsx --watch src/server.ts"*/ 
