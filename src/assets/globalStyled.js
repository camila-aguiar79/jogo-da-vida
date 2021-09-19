import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        background-color: black;
        color: #fff;
    }

    #root {
        display: flex;
        flex-direction: column; 
    }
`
export default GlobalStyle