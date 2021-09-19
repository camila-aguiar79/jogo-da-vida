import React from 'react'
import ReactDOM from 'react-dom'
import Layout from './components/layout'
import GlobalStyle from './assets/globalStyled'


ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Layout />
  </React.StrictMode>,
  document.getElementById('root')
);


