import { useState } from 'react'
import {Link} from 'react-router-dom'
import Alerta from '../components/Alerta';
import axios from 'axios'

const Registrar = () => {

  const [ nombre, setNombre ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword] = useState('');
  const [ repetirPassword, setRepetirPassword ] = useState('');
  const [ alerta, setAlerta ] = useState({})

  const handleSubmit = async e => {
    e.preventDefault()

    if([nombre, email, password, repetirPassword].includes('')){
        setAlerta({
          msg: 'Todos los campos son Obligatorios',
          error: true
        })
        return
    }

    if(password !== repetirPassword){
      setAlerta({
        msg: 'Las contraseñas deben ser iguales',
        error: true
      })
      return
    }

    if(password.length < 6 ){
      setAlerta({
        msg: 'La contraseña debe tener minimo 6 caracteres',
        error: true
      })
      return
    }

    setAlerta({})

    try {
      const {data} = await axios.post(`http://localhost:4000/api/usuario`, {nombre, email, password})
      setAlerta({
        msg: data.msg,
        error: false
      })
      setNombre('')
      setEmail('')
      setPassword('')
      setRepetirPassword('')
    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error: true
      })
    }

    
  }

  const { msg } = alerta; 

  return (
    <>
      <h1 className="text-sky-600 font-black text-6xl capitalize">Crea tu cuenta y Administra tus {''}
      <span className="text-slate-700">Proyectos</span> </h1>

      {msg && <Alerta alerta={alerta}/>}

      <form 
        onSubmit={handleSubmit}
        className="mt-10 mb-5 p-10 bg-white shadow rounded-lg" 
      >

        <div className="my-5">
          <label htmlFor="nombre" className="uppercase text-gray-600 block text-xl font-bold">Nombre</label>
          <input 
            id="nombre"
            type="text" 
            placeholder="Nombre"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            value={nombre}
            onChange={ e => setNombre(e.target.value)}
          />
        </div>

        <div className="my-5">
          <label htmlFor="email" className="uppercase text-gray-600 block text-xl font-bold">Email</label>
          <input 
            id="email"
            type="email" 
            placeholder="Email"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            value={email}
            onChange={ e => setEmail(e.target.value)}
          />
        </div>

        <div className="mt-5 mb-10">
          <label htmlFor="password" className="uppercase text-gray-600 block text-xl font-bold">Contraseña</label>
          <input 
            id="password"
            type="password" 
            placeholder="Contraseña"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            value={password}
            onChange={ e => setPassword(e.target.value)}
          />
        </div>

        <div className="mt-5 mb-10">
          <label htmlFor="repetir-password" className="uppercase text-gray-600 block text-xl font-bold">Repetir Contraseña</label>
          <input 
            id="repetir-password"
            type="password" 
            placeholder="Contraseña"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            value={repetirPassword}
            onChange={ e => setRepetirPassword(e.target.value)}
          />
        </div>

        <input 
          value="Crear Cuenta"
          type="submit"
          className="w-full font-bold uppercase text-white bg-sky-600 py-3 rounded hover:cursor-pointer hover:bg-sky-800 transition-colors mb-5" 
        />
      </form>

      <nav className="lg:flex lg:justify-center">
          <Link to='/' className='block text-center my-5 text-slate-600 text-sm uppercase'> ¿ya tienes una cuenta? inicia sesión
          </Link>

      </nav>
    </>
  )
}

export default Registrar
