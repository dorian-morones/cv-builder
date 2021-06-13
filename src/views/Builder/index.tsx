
import React, { FunctionComponent } from 'react';

import { withRouter } from "react-router";

//components
import InfoForm from './InfoForm';
import DocViewer from './docViewer';
import DocSettings from './docSettings';

interface QuestionsViewProps { }

const BuilderView: FunctionComponent<QuestionsViewProps> = () => {
  return (
    <>
      <div>
        <p>Fill your information</p>
      </div>
      <div>
        <InfoForm />
        <DocViewer />
        <DocSettings />
      </div>
    </>
  );
};

export default withRouter(BuilderView);