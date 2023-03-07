import React, { useContext } from 'react'
import { useParams, Navigate } from "react-router-dom";
import { AuthenticationContext } from 'context/AuthenticationProvider';
// component
import Game from './Game';
// constants
import paths from 'data/paths';
import { all } from 'data/games';

export default function GameContainer() {
  const { loggedIn, user } = useContext(AuthenticationContext);
  let { gameId } = useParams();
  const game = all.find(({id}) => id === parseInt(gameId));

  if(!loggedIn || !user) {
    return <Navigate to={paths.HOME_PAGE} />
  }

  const setBet = val => {
    console.log(val);
  }

  return (
    <Game data={game} user={user} setBet={setBet} />
  )
}
