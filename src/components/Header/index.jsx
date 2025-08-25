import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <>
            <header>
                <nav>
                    <ul>
                        <li> <NavLink to="/">Home</NavLink></li>
                        <li> <NavLink to="/shows">Shows</NavLink></li>
                        <li> <NavLink to="/musicas">Musicas</NavLink></li>
                        <li> <NavLink to="/sobre">Sobre</NavLink></li>
                        <li> <NavLink to="/loja">Loja</NavLink></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

// className={({ isActive }) => isActive ? 'text-main-color font-bold ' : 'text-black  hover:border-b-2 hover:border-black' 