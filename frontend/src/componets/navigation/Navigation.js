import NavMenu from "./NavMenu";


export default function Navigation(){

    return(
        <aside className="sidebar">
        <div className="toggle">
            <a href="#" className="burger js-menu-toggle"  data-toggle="collapse" data-target="#main-navbar">
                <span></span>
            </a>
        </div>

        <NavMenu/>
    </aside>      
    )
    
}