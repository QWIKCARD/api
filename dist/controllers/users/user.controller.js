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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
class UserController {
}
_a = UserController;
UserController.welcome = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return res.status(200).json({
            success: true,
            message: "HOLA MUNDO",
        });
    }
    catch (error) {
        return res.status(500).json({
            ok: false,
            message: "Ocurrio un error intente más tarde",
        });
        //  ErrorClass.HttpError(error, res, 500);
    }
});
UserController.login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        /**
         *
         *  const query = "CALL  CA_INSERTA_POSIBLE_GARANTIA(?,?,?,?,?,?)";
       
             let replacements = [
               req.body.ID_MARCA,
               req.body.ID_MODELO,
               req.body.ID_ANIO,
               req.body.NB_NOMBRE,
               req.CL_EMAIL,
               req.CL_TELEFONO,
             ];
         *
         *  let respuesta: any = await db.query(query, { replacements });
             const { POUT_CL_RESPUESTA, POUT_DS_RESPUESTA, CL_FOLIO, IDD_SOLICITUD } =
               respuesta[0];
       
             console.log(respuesta[0]);
       
             const dataCaralianz = [
               TemplateCorreo.EMAIL_POSIBLE_GARANTIA_CARALIANZ,
               IDD_SOLICITUD,
               "",
               "",
               "",
             ];
             const dataUsuario = [
               TemplateCorreo.EMAIL_POSIBLE_GARANTIA_USUARIO,
               IDD_SOLICITUD,
               "",
               "",
               "",
             ];
       
             //enviar correo electronico.
             const correoCaralianzEnviado = await Correo.EnviarCorreo(
               "Solicitud de garantía extendida",
               admin,
               dataCaralianz,
               bbc
             );
             const correoUsuarioEnviado = await Correo.EnviarCorreo(
               "Solicitud de garantía extendida",
               req.CL_EMAIL,
               dataUsuario,
               bbc
             );
       
             if (!correoCaralianzEnviado || !correoUsuarioEnviado) {
               return res.status(500).json({
                 success: false,
                 message: "No fue posible enviar los datos, intente mas tarde",
               });
             }
       
         */
        return res.status(200).json({
            success: true,
            message: "hola",
        });
    }
    catch (error) {
        return res.status(500).json({
            ok: false,
            message: "Ocurrio un error intente más tarde",
        });
        //  ErrorClass.HttpError(error, res, 500);
    }
});
exports.default = UserController;
