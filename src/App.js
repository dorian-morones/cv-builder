import React from 'react';
import { GlobalProvider } from "./state/GlobalState";

// Routes
import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";

//Routes
import { routes, RouteItem } from './routes'
import { createBrowserHistory } from "history";

// global stylehacks
import { ThemeProvider } from "styled-components";
import { theme } from './theme';

const history = createBrowserHistory();

function App() {
  return (
    <GlobalProvider>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Router history={history}>
            <div>
              <Switch>
                {routes.map((route, i) => (
                  <RouteItem key={i} {...route} />
                ))}
              </Switch>
            </div>
          </Router>
        </div>
      </ThemeProvider>
    </GlobalProvider>
  );
}

export default App;
