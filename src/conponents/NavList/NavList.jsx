import NavItem from "../NavItem/NavItem"


function NavList(){
    return(
        <ul className="nav__list">
            <NavItem text="Random Insult" link="/" />
            <NavItem text="All Insults" link="/InsultsPage" />
            <NavItem text="Add Insult" link="/AddInsultPage" />
        </ul>
    )
}

export default NavList