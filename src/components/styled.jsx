import styled, { css } from "styled-components";
import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
}
`
 const center = css`
 display: flex;
 align-items: center;
 justify-content: center;
 `

export const Header = styled.header`
/* border: solid 1px red; */
height: 25vh;
${center}
justify-content: space-around;
background-color: #2f2d2c;
img{
    width: 10vw;
}
input{
    width: 30vw;
    height: 5vh;
    padding-left: 10px;
}
`

export const Lista = styled.ul`
/* border: solid 1px red; */
list-style: none;
${center}
justify-content: space-evenly;
width: 30vw;
color: white;
font-weight: 700;
`

export const Card = styled.div`
border: solid 1px red;
width: 20vw;
height: 38vh;
${center}
flex-direction: column;
justify-content: space-around;
img{
    width: 15vw;
}
button{
    border: none;
    background-color: #D6020F;
    padding: 10px 20px;
    border-radius: 10px;
    color: white;
}
`

export const BoxCard = styled.section`
height: 70vh;
border: solid 1px red;
${center}
justify-content: space-evenly;

`

export const Principal = styled.div`
img{
    width: 15vw;
}
`