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
            
            <nav className="flex flex-col gap-2 p-5 h-full">
                <Link to='/' className="hover:bg-dark-sidebar-accent active:bg-sidebar-border transition duration-200 rounded-md p-2">Dashboard</Link>
                <Link to='/patients' className="hover:bg-dark-sidebar-accent active:bg-sidebar-border transition duration-200 rounded-md p-2">Pacientes</Link>
                <Link to='/sessions' className="hover:bg-dark-sidebar-accent active:bg-sidebar-border transition duration-200 rounded-md p-2">Sessões</Link>
                <Link to='/finance' className="hover:bg-dark-sidebar-accent active:bg-sidebar-border transition duration-200 rounded-md p-2">Financeiro</Link>
                <Link to='/settings' className="hover:bg-dark-sidebar-accent active:bg-sidebar-border transition duration-200 rounded-md p-2">Configurações</Link>
            </nav>

            <div className="w-full flex flex-col p-5 self-end border-t border-sidebar-border">
                <Link to='/login' className="hover:bg-dark-sidebar-accent active:bg-sidebar-border transition duration-200 rounded-md p-2">Sair da conta</Link>
            </div>
        </aside>
    )
}

export default Navbar