import express from 'express'
import Usuario from '../models/Usuario.js';
import { registrar, autenticar, confirmar, cambiarPassword } from '../controllers/usuarioController.js'

const router = express.Router();

router.post('/', registrar)
router.post('/login', autenticar)
router.get('/confirmar/:token', confirmar)
router.post('/olvide-password', cambiarPassword)



export default router