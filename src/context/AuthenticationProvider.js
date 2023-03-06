import React, { useState, useEffect } from 'react';
import authenticationService from 'services/authenticationService';

export const AuthenticationContext = React.createContext({});

const AuthenticationProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn ] = useState(false);
  const logIn = ({ username, password }) => {
    return authenticationService.logIn({ username, password });
  }

  const logOut = () => {
    return authenticationService.logOut();
  };

  const signUp = ({ username, password }) => {
    return authenticationService.signUp({ username, password });
  };

  const checkAuth = () => {
    return authenticationService.checkAuth();
  };

  useEffect(() => {
    // check auth
    // checkAuth()
    setLoggedIn(false);
    setUser(false);
  }, []);

  return (
    <AuthenticationContext.Provider
      value={{
        loggedIn,
        user,
        logIn,
        logOut,
        signUp
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

export default AuthenticationProvider;
