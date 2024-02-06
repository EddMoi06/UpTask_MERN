import { useEffect, useState } from 'react'
import { Link, useParams} from 'react-router-dom';
import axios from 'axios'
import Alerta from '../components/Alerta';

const NuevoPassword = () => {

  const [ alerta, setAlerta ] = useState({})
  const [ password, setPassword ] = useState('')
  const [ tokenValido, setTokenValido ] = useState(false)
  const [ cuentaConfirmada, setCuentaConfirmada ] = useState(false)


  const params = useParams()
  const { token } = params

  useEffect(() => {
      const comprobarToken = async () => {
          try {

            await axios(`http://localhost:4000/api/usuario/olvide-password/${token}`)
            setTokenValido(true)

          } catch (error) {
            setAlerta({
              msg: error.response.data.msg,
              error: true
            })
          }
      }

      comprobarToken()
  },[])

  const handleSubmit = async e => {
    e.preventDefault()

    if(password.length < 6 ){
      setAlerta({
        msg: 'La contraseña debe tener minimo 6 caracteres',
        error: true
      })
      return
    }

    if(tokenValido){
      try {
          const { data } = await axios.post(`http://localhost:4000/api/usuario/olvide-password/${token}`, { password })

          setAlerta({
            msg: data.msg,
            error: false
          })
          setPassword('')
      } catch (error) {
        setAlerta({
          msg: error.response.data.msg,
          error: false
        })
      }

      setCuentaConfirmada(true)
  }
  }
  return (
    <>
      <h1 className="text-sky-600 font-black text-6xl capitalize">Restablece tu {''}
      <span className="text-slate-700">Contraseña</span> </h1>

      {alerta.msg && <Alerta alerta={alerta}/>}

      {tokenValido ? (<form className="mt-10 mb-5 p-10 bg-white shadow rounded-lg " onSubmit={handleSubmit}>

        <div className="mt-5 mb-10">
          <label htmlFor="password" className="uppercase text-gray-600 block text-xl font-bold">Nueva Contraseña</label>
          <input 
            id="password"
            type="password" 
            placeholder="Nueva Contraseña"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>

        <input 
          value="Guargar nueva Contraseña"
          type="submit"
          className="w-full font-bold uppercase text-white bg-sky-600 py-3 rounded hover:cursor-pointer hover:bg-sky-800 transition-colors mb-5" 
        />
        </form>) : ''}

        {cuentaConfirmada && ( 
          <Link to='/' className='block text-center my-5 text-slate-600 text-sm uppercase'> inicia sesión
          </Link>
        )}
    </>
  )
}

export default NuevoPassword
