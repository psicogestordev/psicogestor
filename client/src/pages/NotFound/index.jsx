import { Link } from "react-router-dom";

function NotFound() {
    return (
        <>
            <div className="flex flex-col">
                <h1 className="font-bold text-2xl">Ops... esta página não existe</h1>
                <Link to='/' className="text-blue-500">Voltar</Link>
            </div>
        </>
    )
}

export default NotFound;