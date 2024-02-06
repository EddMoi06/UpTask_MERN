import { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [ usuario, setUsuario ] = useState({})
    const [ cargando, setCargando ] = useState(true)

    const navigate = useNavigate()

    useEffect(() => {
        const autenticarUsuario = async () => {
            const token = localStorage.getItem('token')
            if(!token){
                setCargando(false)
                return
            }

            const config = {
                headers:{
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }

            try {
                const { data } = await axios('http://localhost:4000/api/usuario/perfil', config)
                setUsuario(data)
                navigate('/proyectos')
            } catch (error) {
                setUsuario({})
            } finally {
                setCargando(false)
            }
        }

        autenticarUsuario()
    },[])

    return (
        <AuthContext.Provider 
            value={{
                usuario,
                setUsuario,
                cargando
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export { AuthProvider}
export default AuthContext