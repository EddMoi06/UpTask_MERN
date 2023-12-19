import express from 'express'
import Usuario from '../models/Usuario.js';
import { registrar, autenticar } from '../controllers/usuarioController.js'

const router = express.Router();

router.post('/', registrar)
router.post('/login', autenticar)



export default router