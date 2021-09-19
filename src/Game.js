import React from 'react'
import * as S from './style'
import Grid from './components/grid'



const Game = () => {

  return (
    <S.Main>
      <button>Iniciar</button>
      <button>Pausar</button>
      <button>Parar</button>
      <Grid />
    </S.Main>
  
  )
}

export default Game;
 