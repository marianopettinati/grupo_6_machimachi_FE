import styled from 'styled-components';

export const product = styled.li`
    padding: 10px;
    border: solid 1 px darkred;
    border-radius: 8px;
`

export const Wrapper = styled.div`
    display: flex;
    border-radius: 8px;
    padding: 10px;
    margin: 20px;
    background-image: linear-gradient(to right,blue, rgb(252, 206, 214));
    box-shadow: inset 0 0 0 1px darkred;
    flex-direction: column;    
`

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