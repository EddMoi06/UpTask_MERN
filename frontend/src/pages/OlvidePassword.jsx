import {Link} from 'react-router-dom'

const OlvidePassword = () => {
  return (
    <>
      <h1 className="text-sky-600 font-black text-6xl capitalize">Recupera tu acceso y no pierdas {''}
      <span className="text-slate-700">Proyectos</span> </h1>

      <form className="mt-10 mb-5 p-10 bg-white shadow rounded-lg ">

        <div className="my-5">
          <label htmlFor="email" className="uppercase text-gray-600 block text-xl font-bold">Email</label>
          <input 
            id="email"
            type="email" 
            placeholder="Email"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
          />
        </div>

        <input 
          value="Enviar instrucciones"
          type="submit"
          className="w-full font-bold uppercase text-white bg-sky-600 py-3 rounded hover:cursor-pointer hover:bg-sky-800 transition-colors mb-5" 
        />
      </form>

      <nav className="lg:flex lg:justify-between">
          <Link to='/registrar' className='block text-center my-5 text-slate-600 text-sm uppercase'> ¿No tienes una cuenta? Regístrate
          </Link>

          <Link to='/' className='block text-center my-5 text-slate-600 text-sm uppercase'> ¿ya tienes una cuenta? inicia sesión
          </Link>

      </nav>
    </>
  )
}

export default OlvidePassword
