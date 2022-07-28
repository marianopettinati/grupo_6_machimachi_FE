import styled, { css } from 'styled-components';

export const Card = styled.div`
    display: flex;
    border-radius: 8px;
    border: solid darkred 1px;
    background-image: linear-gradient(to right,white, rgb(252, 206, 214));
`

export const CardTitle = styled.div`
  padding: 2em;
`;

export const Icon = styled.div`
  width: 200px;
  color: darkred;
  font-weight: bolder;
  justify-self: center;
  border-radius: 8px;
`;

export const TextWrapper = styled.div`
  width: 100px;
  font-weight: bolder; 
  font-size: 40px;
  border-radius:0px 8px 8px 0px;
  justify-self: center;
  background-color: darkred;
  color white;
`;
