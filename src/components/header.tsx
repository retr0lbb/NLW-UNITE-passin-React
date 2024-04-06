import nlwSvg from "../assets/nlw-unite-icon.svg"
import { NavLink } from "./nav-link"

export function Header(){
    return(
        <div className="flex items-center gap-5 py-2">
            <img src={nlwSvg} alt="" />

            <nav className="flex items-center gap-5">
                <NavLink href="">Eventos</NavLink>
                <NavLink href="" isSelected>Participantes</NavLink>
            </nav>
        </div>
    ) 
}