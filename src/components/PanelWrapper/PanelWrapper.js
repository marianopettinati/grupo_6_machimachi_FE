import React from "react";
import PropTypes from 'prop-types';
import * as S from "./PanelWrapper.styles";

const PanelWrapper = ({
    title,
    children,
    direction
}) => {
    
    return (
        <S.PanelWrapper>
            <S.TitleWrapper>
                <S.Title>{title}</S.Title>
            </S.TitleWrapper>
            <S.ChildrenWraper direction = {direction}>
                { children }
            </S.ChildrenWraper>            
        </S.PanelWrapper>
    )
}

PanelWrapper.defaultProps = {
    direction: 'row'
}

PanelWrapper.propTypes = {
    title: PropTypes.string.isRequired,
    direction: PropTypes.oneOf(['row', 'column'])
}

export default PanelWrapper;