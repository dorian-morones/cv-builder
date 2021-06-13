
import React, { FunctionComponent } from 'react';

import { withRouter } from "react-router";

interface InfoFormProps { }

const InfoForm: FunctionComponent<InfoFormProps> = () => {
  return (
    <>
      <div>
        <p>Form</p>
      </div>
    </>
  );
};

export default withRouter(InfoForm);