import express from 'express'
import Usuario from '../models/Usuario.js';
import { registrar, autenticar, confirmar, cambiarPassword, comprobarToken, nuevoPassword, perfil } from '../controllers/usuarioController.js';

import checkAuth from '../middleware/checkAuth.js';

const router = express.Router();

router.post('/', registrar)
router.post('/login', autenticar)
router.get('/confirmar/:token', confirmar)
router.post('/olvide-password', cambiarPassword)
router.route('/olvide-password/:token')
    .get(comprobarToken)
    .post(nuevoPassword);

router.get('/perfil', checkAuth, perfil)



export default router