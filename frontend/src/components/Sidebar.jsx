import { Link } from "react-router-dom"

const Sidebar = () => {
  return (
    <aside className="md:w-80 lg:w-96 px-5 py-10">
        <p className="font-bold text-xl">Hola: Moises</p>

        <Link
            to='crear-proyecto'
            className="bg-sky-600 w-full p-3 text-white uppercase font-bold rounded-lg block mt-5 text-center hover:bg-sky-800 transition-colors"
        > Nuevo Proyecto</Link>
    </aside>
  )
}

export default Sidebar
