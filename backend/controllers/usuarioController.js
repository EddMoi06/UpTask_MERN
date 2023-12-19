import Usuario from "../models/Usuario.js"

const registrar = async ( req, res ) => {

    const { email } = req.body
    const existeUsuario = await Usuario.findOne({ email })

    if(existeUsuario){
        const error = new Error('Este usuario ya Existe')
        return res.status(400).json({ msg: error.message})
    }

    try {
        const usuario = new Usuario(req.body)
        const usuarioAlmacenado = await usuario.save()
        res.send(usuarioAlmacenado)
    } catch (error) {
        console.log(error)
    }
}

export {
    registrar
}