import { validationResult } from "express-validator";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
//import Responses from "../helpers/responses";

class validaciones {
/**
 * 
 * @param req   static validarCampos = (req: Request, res: Response, next) => {
    const errores = validationResult(req); //cachando errores desde el middleware
    if (!errores.isEmpty()) {
      return Responses.send(res, req, 400, true, errores.mapped().toString());
    }

    //si llega aqui no hay errores
    next();
  };

 * @param res 
 * @param next 
 * @returns 
 */

  
  static validarToken = (req, res, next) => {
    try {
      // Leer el encabezado de autorización
const authHeader = req.header("Authorization");


if (!authHeader || !authHeader.startsWith("Bearer ")) {
  return res.status(401).json({
    error: true,
    message: "Unauthorized: No token provided or format is invalid",
  });
}

// Extraer el token eliminando la palabra "Bearer "
const token = authHeader.split(" ")[1];
console.log(token);
console.log("***");

 // Verificar el token
 const decoded = jwt.verify(token, process.env.SEED_TOKEN || "default_seed");
 console.log(decoded);
  // Agregar información del token a la request para usarla en los controladores
 req.body.id_usuario = (decoded as any).id_usuario;  
 next();
    
    } catch (error) {
      return res.status(401).json({
        error: true,
        message: "Token no válido o expirado",
      });
    }

  };
}

export default validaciones;
