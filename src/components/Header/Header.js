import React from "react";
import * as S from './Header.styles.js';
import logo from "../../images/mm-logo-con-nombre.png"
import logo2 from "../../images/logo2-machimachi.png"

const  Header = () => {
    return (
        <div>
            <S.wrapper>
                <S.logo2 src= { logo2 } alt="machimachi_logo2"/>
                <S.logo src= { logo } alt="machimachi_logo"/>
                <S.logo2 src= { logo2 } alt="machimachi_logo2"/>
            </S.wrapper>

            <S.dashboard> 
                <p>  D a s h b o a r d </p>
            </S.dashboard>
        </div>
      )
    
};



export default Header;