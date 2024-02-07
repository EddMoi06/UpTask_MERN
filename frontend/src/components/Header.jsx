import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className='px-5 py-4 bg-white border-b'>
        <div className='md:flex md:justify-between'>
            <h2 className='text-4xl font-black text-sky-600 text-center'>
                UpTask
            </h2>

            <input 
                type="search" 
                placeholder='Buscar Proyecto'
                className='rounded p-3 lg:w-96 block border'
            />

            <div className="flex gap-4 items-center">
                <Link
                    to='/proyectos'
                    className="font-bold uppercase hover:text-sky-500 transition-colors"
                >
                        Proyectos
                </Link>

                <button
                    type="button"
                    className="text-white text-sm bg-sky-600 p-3 rounded-md uppercase font-bold hover:bg-sky-800 transition-colors"
                >
                    Cerrar Sesión
                </button>
            </div>
        </div>
    </header>
  )
}

export default Header
