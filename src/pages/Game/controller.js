import React, { useContext, useEffect, useState } from 'react'
import { redirect, useParams } from "react-router-dom";
import { AuthenticationContext } from 'context/AuthenticationProvider';
import Game from './Game';
import paths from 'data/paths';
import { all } from 'data/games';

export default function GameContainer() {
  const { loggedIn } = useContext(AuthenticationContext);
  let { gameId } = useParams();
  const [game, setGame] = useState(null);

  useEffect(() => {
    setGame(all.find(({id}) => id === +gameId));
  }, [gameId])

  if(!loggedIn) {
    redirect(paths.HOME_PAGE)
  }

  if(!game) return;

  return (
    <Game data={game} />
  )
}
