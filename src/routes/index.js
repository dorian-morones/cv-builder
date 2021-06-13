import {
  Route,
} from "react-router-dom";

// Views
import HomeView from '../views/Home';
import BuilderView from '../views/Builder/index'


export const routes = [
  {
    path: "/",
    component: HomeView,
    exact: true
  },
  {
    path: "/builder",
    component: BuilderView,
    exact: false
  }
];

export const RouteItem = (route) => {
  return (
    <Route exact={route.exact} path={route.path} render={route.component} />
  );
}