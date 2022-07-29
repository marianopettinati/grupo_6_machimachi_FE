import React from "react";
import * as S from "./PanelWrapper.styles";

const PanelWrapper = (
    Title,
    Children,
    Direction
) => {

    const renderChildren = () => {
        <S.ChildrenWrapper>
            { Children }
        </S.ChildrenWrapper>
    }

    const renderTitle = () => {
        <S.Title>
            {Title}
        </S.Title>
    }

    return (
        <S.PanelWrapper>
            { Title && renderTitle }
            { Children && renderChildren() }
        </S.PanelWrapper>
    )
}

export default PanelWrapper;