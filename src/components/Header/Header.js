import React from "react"
import logo from "../../images/mm-logo-con-nombre.png"
import "./Header.css"

const Header = () => {
    return (
        <header>
             <div>
                <img src= { logo } alt="machimachi_logo" className="header-logo"/>
                <p className="header-name"> D a s h b o a r d </p>
            </div>
        </header>
    )
};

export default Header