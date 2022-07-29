import styled from 'styled-components';

export const Card = styled.div`
    display: flex;
    border-radius: 8px;
    background-image: linear-gradient(to right,white, rgb(252, 206, 214));
    box-shadow: inset 0 0 0 1px darkred;
`
//border-radius: 50px 8px 50px 50px;
export const CardTitle = styled.div`
  padding: 2em;
`;

export const Title = styled.div`
  width: 200px;
  color: darkred;
  font-weight: bolder;
  justify-self: center;
  border-radius: 8px;
`;

export const Description = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  font-weight: bolder; 
  font-size: 40px;
  border-radius:0px 8px 8px 50px;
  background-color: darkred;
  color white;
`;

//border-radius: 4px 8px 50px 50px;