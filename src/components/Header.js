import React from "react"
import logo from "../images/mm-logo-con-nombre.png"
import "./Header.css"

function Header () {
    return (
        <header>
             <div>
                <img src= { logo } alt="machimachi_logo" className="header-logo"/>
            </div>
        </header>
    )
};

export default Header