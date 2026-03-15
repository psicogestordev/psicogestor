import { Link } from "react-router-dom"

function Navbar () {
    return (
        <aside className="w-65 h-screen bg-sidebar-background text-white flex flex-col items-center">
            <nav className="flex flex-col p-3">
                <Link to='/'>Dashboard</Link>
                <Link to='/patients'>Pacientes</Link>
                <Link to='/sessions'>Sessões</Link>
                <Link to='/finance'>Financeiro</Link>
                <Link to='/settings'>Configurações</Link>
            </nav>
        </aside>
    )
}

export default Navbar