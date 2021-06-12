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

const history = createBrowserHistory();

function App() {
  return (
    <GlobalProvider>
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
    </GlobalProvider>
  );
}

export default App;
