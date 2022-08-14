import React, {useState} from 'react'
import { createBrowserHistory } from "history";
import AllRoutes from './router/Routes'
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import "./App.scss"

const history = createBrowserHistory({ window });
export const TokenContext = React.createContext();

export default function App() {
  const [token, setToken] = useState();

  return (
      <HistoryRouter history={history}>
        <TokenContext.Provider value={[token, setToken]}>
          <AllRoutes/>
        </TokenContext.Provider>
      </HistoryRouter>
  )
}