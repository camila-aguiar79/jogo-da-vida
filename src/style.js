import styled from 'styled-components'

export const Main = styled.main`
    margin-top: 100px;
`
export const Button = styled.button`
    height: 35px;
    width: 80px;
    border: none;
    border-radius: 5px; 
    cursor: pointer;
    font-size: 16px;
    font-weight: 500;
    background-color: #ffd300;

        :hover {
            opacity: 0.8;
        }
    
        :first-child {
            background-color: #ff0000;
            margin-left: 160px;
            margin-right: 20px;    
        }

        :last-child {
            background-color: #147df5;
            margin-left: 20px;
        }
`



