import { useMatches } from "react-router-dom"

function Header() {
    const matches = useMatches();
    const title = matches[matches.length - 1].handle.title;

    if(!title) return null;

    return (
        <header className="h-fit w-full">
            <h1 className="font-bold text-2xl">{title || "PsicoGestor"}</h1>
        </header>
    )
}

export default Header