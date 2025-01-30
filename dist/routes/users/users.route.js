"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = __importDefault(require("../../controllers/users/user.controller"));
const router = (0, express_1.Router)();
// Registra la ruta POST /login
router.get('/login', user_controller_1.default.login);
router.get('/', user_controller_1.default.welcome);
//router.get('/renew',validaciones.validarToken, UserController.renewToken);
//router.get('/ObtenerCitasPerfil/:id_usuario',validaciones.validarToken, UserController.ObtenerCitasPerfil);
exports.default = router;
