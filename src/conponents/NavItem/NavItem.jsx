function NavItem({link, text}){
    return(
        <li className="nav__item">
            <a href={link}>{text}</a>
        </li>
    )
}

export default NavItem