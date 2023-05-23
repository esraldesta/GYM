import { Link } from "react-router-dom";

export default function NavItem({to,name}){
    return(
        <li><Link to={to}>{name}</Link></li>
    )
}