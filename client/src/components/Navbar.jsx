import { Link } from "react-router-dom"

function Navbar () {
    return (
        <aside className="w-65 h-screen bg-sidebar-background text-white flex flex-col">
            <div className="w-full flex items-center gap-3 p-5 border-b border-sidebar-border">
                <div className="w-9 h-9 flex items-center justify-center font-bold text-lg bg-primary rounded-lg">P</div>
                <span className="font-bold text-lg">PsicoGestor</span>
            </div>

            <div className="w-full flex items-center gap-3 p-4 border-b border-sidebar-border">
                <div className="w-9 h-9 flex items-center justify-center font-bold text-lg bg-sidebar-border rounded-full">A</div>
                <h1>Admin</h1>
            </div>
            
            <nav className="flex flex-col p-5">
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