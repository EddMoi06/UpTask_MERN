import Tarea from "../models/Tarea.js";
import Proyecto from "../models/Proyecto.js";

const agregarTarea = async (req,res) => {
    const { proyecto } = req.body;
    const existeProyecto = await Proyecto.findById(proyecto);

    if(!existeProyecto){
        const error = new Error('El Proyecto no Existe')
        res.status(404).json({msg: error.message})
    }

    
}

const obtenerTarea = async(req,res) => {

}

const actualizarTarea = async (req,res) => {
    
}

const eliminarTarea = async (req,res) => {
    
}

const cambiarEstado = async (req,res) => {

}

export {
    agregarTarea,
    obtenerTarea,
    actualizarTarea,
    eliminarTarea,
    cambiarEstado
}