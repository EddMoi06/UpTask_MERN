import { useState, useEffect} from 'react'
import { useParams, Link} from 'react-router-dom'
import axios from 'axios'
import Alerta from '../components/Alerta'

const ConfirmarCuenta = () => {

  const [ alerta, setAlerta ] = useState({})
  const [ cuentaConfirmada, setCuentaConfirmada ] = useState(false)

  const params = useParams();
  const { id } = params;

  useEffect(() => {
      const confirmarCuenta = async () => {

        try {
          const url = `http://localhost:4000/api/usuario/confirmar/${id}`
          const {data} = await axios(url)
          setAlerta({
            msg: data.msg,
            error: false
          })

          setCuentaConfirmada(true)
          return
        } catch (error) {
          setAlerta({
            msg: error.response.data.msg,
            error: true
          })

          return
        }
      }

      confirmarCuenta()
  },[])

  const { msg } = alerta;

  return (
    <>
      <h1 className="text-sky-600 font-black text-6xl capitalize">Confirma tu {''}
      <span className="text-slate-700">Cuenta</span> </h1>

      <div>
        {msg && <Alerta alerta={alerta}/>}

        {cuentaConfirmada && ( 
          <Link to='/' className='block text-center my-5 text-slate-600 text-sm uppercase'> inicia sesión
          </Link>
        )}
      </div>

        
    </>
  )
}

export default ConfirmarCuenta
