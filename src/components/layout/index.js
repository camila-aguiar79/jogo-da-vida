import React from 'react'
import Header from './header'
import Footer from './footer'
import Game from '../../Game'

const Layout = () => {
    return (
        <React.Fragment>
            <Header />
            <Game />
            <Footer />
        </React.Fragment>
    )
}

export default Layout