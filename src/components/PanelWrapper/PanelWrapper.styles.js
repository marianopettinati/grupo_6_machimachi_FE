import styled, { css } from 'styled-components';

export const PanelWrapper = styled.div`
    display: flex;
    border-radius: 8px;
    padding: 10px;
    margin: 20px;
    background-image: linear-gradient(to right,white, rgb(252, 206, 214));
    box-shadow: inset 0 0 0 1px darkred;
    flex-direction: column;    
`

export const ChildrenWraper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    ${({ direction }) =>
    direction == 'row' && 
        css`
            flex-direction: row;
        `}

    ${({ direction }) =>
    direction == 'column' && 
        css`
            flex-direction: column;
        `}

`

export const Title = styled.h1`
    color: darkred;
    font-weight: bolder;
`

export const TitleWrapper = styled.div`
    text-align: center;
`