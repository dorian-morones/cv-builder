
import React, { FunctionComponent } from 'react';

import { withRouter } from "react-router";

//components
import InfoForm from './InfoForm';
import DocViewer from './docViewer';
import DocSettings from './docSettings';

//styled components
import {
  BuilderHeader,
  BuilderTitle,
  BuilderSeparator,
  ContentContainer
} from './styles/builder_styles';

interface QuestionsViewProps { }

const BuilderView: FunctionComponent<QuestionsViewProps> = () => {
  return (
    <>
      <BuilderHeader>
        <BuilderTitle>Fill your information</BuilderTitle>
      </BuilderHeader>
      <BuilderSeparator />
      <ContentContainer>
        <InfoForm />
        <DocViewer />
        <DocSettings />
      </ContentContainer>
    </>
  );
};

export default withRouter(BuilderView);