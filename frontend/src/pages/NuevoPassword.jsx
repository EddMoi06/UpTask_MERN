
const NuevoPassword = () => {
  return (
    <>
      <h1 className="text-sky-600 font-black text-6xl capitalize">Restablece tu {''}
      <span className="text-slate-700">Contraseña</span> </h1>

      <form className="mt-10 mb-5 p-10 bg-white shadow rounded-lg ">

        <div className="mt-5 mb-10">
          <label htmlFor="password" className="uppercase text-gray-600 block text-xl font-bold">Nueva Contraseña</label>
          <input 
            id="password"
            type="password" 
            placeholder="Nueva Contraseña"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
          />
        </div>

        <input 
          value="Guargar nueva Contraseña"
          type="submit"
          className="w-full font-bold uppercase text-white bg-sky-600 py-3 rounded hover:cursor-pointer hover:bg-sky-800 transition-colors mb-5" 
        />
      </form>
    </>
  )
}

export default NuevoPassword
