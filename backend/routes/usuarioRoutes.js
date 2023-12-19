import express from 'express'
import Usuario from '../models/Usuario.js';
import { registrar } from '../controllers/usuarioController.js'

const router = express.Router();

router.post('/', registrar)



export default router