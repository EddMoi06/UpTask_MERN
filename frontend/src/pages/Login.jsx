import {Link} from 'react-router-dom'

const Login = () => {
  return (
    <>
      <h1 className="text-sky-600 font-black text-6xl capitalize">Inicia Sesión y Administra tus {''}
      <span className="text-slate-700">Proyectos</span> </h1>

      <form className="mt-10 mb-5 p-10 bg-white shadow rounded-lg ">
        <div className="my-5">
          <label htmlFor="email" className="uppercase text-gray-600 block text-xl font-bold">Email</label>
          <input 
            id="email"
            type="email" 
            placeholder="Email de Registro"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
          />
        </div>

        <div className="mt-5 mb-10">
          <label htmlFor="password" className="uppercase text-gray-600 block text-xl font-bold">Contraseña</label>
          <input 
            id="password"
            type="password" 
            placeholder="Contraseña de Registro"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
          />
        </div>

        <input 
          value="Iniciar Sesión"
          type="submit"
          className="w-full font-bold uppercase text-white bg-sky-600 py-3 rounded hover:cursor-pointer hover:bg-sky-800 transition-colors mb-5" 
        />
      </form>

      <nav className="lg:flex lg:justify-between">
          <Link to='registrar' className='block text-center my-5 text-slate-600 text-sm uppercase'> ¿No tienes una cuenta? Regístrate
          </Link>

          <Link to='olvide-password' className='block text-center my-5 text-slate-600 text-sm uppercase'> Olvide mi Contraseña
          </Link>
      </nav>
    </>
  )
}

export default Login
