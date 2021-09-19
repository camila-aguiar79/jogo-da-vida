import React from 'react'
import styled from 'styled-components'

const Footer = () => {
    return (
        <SFooter>
            <div>&copy; Copyright 2021 - Jogo da Vida</div>
        </SFooter>
        
    )
}

export default Footer


export const SFooter = styled.footer`
    padding: 5px 0;
    height: 15px;
    width: 100vw;
    border-top: .2px solid #666;
    text-align: center;
    font-size: 14px;
`