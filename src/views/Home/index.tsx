
import React, { FunctionComponent } from 'react';

// styles
import {
  HomeContainer,
  CreateButton
} from './styles/home_styles';

// Routes
import {
  Link
} from "react-router-dom";
import {
  withRouter
} from 'react-router'

interface HomeViewProps { }

const HomeView: FunctionComponent<HomeViewProps> = () => {
  return (
    <HomeContainer>
      <CreateButton>Create Resume</CreateButton>
      <Link to="/questions">questions</Link>

    </HomeContainer>
  );
};

export default withRouter(HomeView);
