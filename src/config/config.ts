import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config(); // Cargar variables de entorno

export const DB = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  logging: false
});