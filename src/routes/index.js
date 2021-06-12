import {
  Route,
} from "react-router-dom";

// Views
import HomeView from '../views/Home';
import QuestionsView from '../views/Questions/index'


export const routes = [
  {
    path: "/",
    component: HomeView,
    exact: true
  },
  {
    path: "/questions",
    component: QuestionsView,
    exact: false
  }
];

export const RouteItem = (route) => {
  return (
    <Route exact={route.exact} path={route.path} render={route.component} />
  );
}