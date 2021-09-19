import React from 'react'
import styled from 'styled-components'

const Header = () => {
    return (
        <SHeader>
            <SUnorder>
                <SList></SList>
                <SList></SList>
            </SUnorder> 
            <STitle>Jogo da Vida</STitle>              
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

export const STitle = styled.h1`
    :hover {
        color: #a1ff0a;
    }
`

export const SUnorder = styled.ul`
    margin-right: 20px;
`

export const SList = styled.li`
    height: 20px;
    width: 20px;
    list-style: none;   
    border-radius: 2px;
    display: inline-block;
    margin-top: 10px;

    :first-child {
        background-color: #fff;
        border: 1px solid #fff;
    }

    :first-child:hover {
        background-color: #ff006e;
        border: 1px solid #ff006e;
    }

    :last-child {
        background-color: #4cc9f0;
        border: 1px solid #4cc9f0;
        margin-left: 1px;
    }

    :last-child:hover {
        background-color: #ffea00;
        border: 1px solid #ffea00;
    }
`