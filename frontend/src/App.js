import React, { useState } from 'react'
import { createBrowserHistory } from "history";
import AllRoutes from './router/Routes'
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import "./App.scss"

const history = createBrowserHistory({ window });

export default function App() {
  return (
      <HistoryRouter history={history}>
        <AllRoutes/>
      </HistoryRouter>
  )
}