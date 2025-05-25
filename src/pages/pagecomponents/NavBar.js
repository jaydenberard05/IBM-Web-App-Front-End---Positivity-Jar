import { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [ page, setPage ] = useState(0);

    function selectPage() {
        var navItems = document.getElementsByClassName("nav-item");

        for (var i = 0; i < navItems.length; i++) {
            navItems[i].classList.remove("selected-nav-item");
        }

        if (page != undefined) navItems[page].classList.add("selected-nav-item");
    }

    useEffect(() => {
        selectPage();
    }, [page])

    return (
        <ul className= "navbar-style">
            <NavLink to="/dashboard"><li className="nav-item" id="dashboard-nav-item" onClick={() => { setPage(0) }}>Dashboard</li></NavLink>
            <NavLink to="/my-jars"><li className="nav-item" id="jars-nav-item" onClick={() => { setPage(1) }}>MyJars</li></NavLink>
            <NavLink to="/friends"><li className="nav-item" id="jars-nav-item" onClick={() => { setPage(2) }}>Friends</li></NavLink>
            <NavLink to="/account"><li className="nav-item" id="account-nav-item" onClick={() => { setPage(3) }}>Account</li></NavLink>
            <NavLink to="/settings"><li className="nav-item" id="settings-nav-item" onClick={() => { setPage(4) }}>Settings</li></NavLink>
        </ul>
    );
}

export default Navbar;