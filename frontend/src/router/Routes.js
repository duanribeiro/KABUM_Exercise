import React, {useContext} from 'react' 
import {LoginView, ClientsView} from './../views' 

import {
  Routes, Route
} from "react-router-dom";
import { Navigate } from 'react-router-dom';
import { TokenContext } from '../App'


const PrivateRoute = ({ children }) => {
    const [token, ] = useContext(TokenContext);
    return token ? children : <Navigate to="/login" />
}


const AllRoutes = () => {
  return (
    <Routes>
      <Route
        exact
        path="/login"
        element={<LoginView/>}
      />

      <Route
        exact
        path="/clients"
        element={<ClientsView/>}
      />

      {/* <Route
        exact
        path="/clients"
        element={
          <PrivateRoute>
            <ClientsView/>
          </PrivateRoute>
        }
      /> */}
      
      <Route
        path="*"
        element={<Navigate to="/login" replace />}
      />
    </Routes >
  ) 
} 

export default AllRoutes 
