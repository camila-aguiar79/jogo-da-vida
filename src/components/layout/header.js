import React from 'react'
import styled from 'styled-components'

const Header = () => {
    return (
        <SHeader>
            <SUnorder>
                <SList></SList>
                <SList></SList>
            </SUnorder> 
            <h1>Jogo da Vida</h1>              
        </SHeader>
        
    )
}

export default Header


export const SHeader = styled.header`
    display: flex;      
    justify-content: center;
    padding: 15px 0;
    position: fixed;
    height: 40px;
    width: 100%;
    border: none;
    box-shadow: 0 0 20px 0 #fff;
`

export const SUnorder = styled.ul`
    margin-right: 20px;
`

export const SList = styled.li`
    height: 20px;
    width: 20px;
    list-style: none;
    background-color: #fff;
    border: 1px solid #666;
    display: inline-block;
    margin-top: 10px;
`