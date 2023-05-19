import styled from "styled-components";

const Button = styled.button`
background-color: ${props => props.theme.primary};
padding: 15px 20px;
border-radius: 10px;
border: 0;
font-weight: bold;
color: ${props => props.theme.white};
font-size: 16px;
cursor: pointer;
transition: 0.3s;

:houver {
  background-color: ${props => props.theme.primaryHouver};

}

`

export default  Button
