import React from "react";
import * as S from "./PanelWraper.styles";

const PanelWraper = ({
    Title,
    Children,
    Direction
}) => {

    const renderChildren = () => {
        <S.ChildrenWraper>
            { Children }
        </S.ChildrenWraper>
    }

    const renderTitle = () => {
        <S.Title>
            {Title}
        </S.Title>
    }

    return (
        <S.PanelWraper>
            { Title && renderTitle }
            { Children && renderChildren() }
        </S.PanelWraper>
    )
}

export default PanelWraper;