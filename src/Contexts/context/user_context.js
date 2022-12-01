import React, { useContext, useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
      const { loginWithRedirect, user, logout, isLoading } = useAuth0();

      const [myUser, setMyUser] = useState(null);

      useEffect(() => {
            setMyUser(user);
      }, [user]);

      return (
            <UserContext.Provider value={{
                  myUser,
                  loginWithRedirect,
                  isLoading,
                  logout,

            }}>{children}</UserContext.Provider>
      )
}

export const useUserContext = () => {
      return useContext(UserContext);
}