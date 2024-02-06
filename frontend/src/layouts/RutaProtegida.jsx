import { Outlet, Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const RutaProtegida = () => {

    const { usuario, cargando } = useAuth()

    if(cargando) return 'cargando....'
    
  return (
    <>
        {usuario._id ? <Outlet/> : <Navigate to='/'/>}
    </>
  )
}

export default RutaProtegida
