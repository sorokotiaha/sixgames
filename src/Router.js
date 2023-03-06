import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// components
import Home from 'pages/Home';
import Game from 'pages/Game/controller';
import Library from 'pages/Library';

import paths from 'data/paths';

const Router = ({ match }) => {
  return (
      <Routes>
        <Route path={paths.HOME_PAGE} element={<Home />} />
        <Route path={paths.LIBRARY_PAGE} element={<Library />} />
        <Route path={paths.GAME_PAGE + '/:gameId'} element={<Game />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
  );
};

export default Router;