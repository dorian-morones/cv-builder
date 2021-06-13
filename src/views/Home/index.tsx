
import React, { FunctionComponent } from 'react';

// styles
import {
  HomeContainer,
  CreateButton
} from './styles/home_styles';

// router
import {
  withRouter
} from 'react-router'
// import { Link } from 'react-router-dom';

interface HomeViewProps { }

const HomeView: FunctionComponent<HomeViewProps> = () => {
  return (
    <HomeContainer>
      <CreateButton to="/builder">Create Resume</CreateButton>
    </HomeContainer>
  );
};

export default withRouter(HomeView);
