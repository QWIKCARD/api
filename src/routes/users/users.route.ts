import { Router } from "express";
import UserController from "../../controllers/users/user.controller";
import validaciones from "../../middlewares/middleware";

const router: Router = Router();

// Registra la ruta POST /login
router.get('/login', UserController.login);
router.get('/', UserController.welcome);

//router.get('/renew',validaciones.validarToken, UserController.renewToken);
//router.get('/ObtenerCitasPerfil/:id_usuario',validaciones.validarToken, UserController.ObtenerCitasPerfil);







export default router;

