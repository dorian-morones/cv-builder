
import React, { FunctionComponent } from 'react';

import { withRouter } from "react-router";

interface SettingsProps { }

const DocSettings: FunctionComponent<SettingsProps> = () => {
  return (
    <>
      <div>
        <p>Settings</p>
      </div>
    </>
  );
};

export default withRouter(DocSettings);