import React, { useState, useEffect } from 'react';
import authenticationService from 'services/authenticationService';

export const AuthenticationContext = React.createContext({});

const AuthenticationProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn ] = useState(false);

  const logIn = ({ username, password }) => {
    // ToDo: implement in future
    // return authenticationService.logIn({ username, password });
    setLoggedIn(true);
    setUser({
      balance: 100,
      username: 'Alex'
    });
  }

  const logOut = () => {
    // ToDo: implement in future
    // return authenticationService.logOut();
    setLoggedIn(false);
    setUser(null);
  };

  const signUp = ({ username, password }) => {
    // ToDo: implement in future
    // return authenticationService.signUp({ username, password });
    setLoggedIn(true);
    setUser({
      balance: 100,
      username: 'Alex'
    });
  };

  const checkAuth = () => {
    // ToDo: implement in future
    // return authenticationService.checkAuth();
    // emulation
    setLoggedIn(true);
    setUser({
      balance: 100,
      username: 'Alex'
    });
  };

  useEffect(() => {
    checkAuth()
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
