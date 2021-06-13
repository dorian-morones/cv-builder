
import React, { FunctionComponent } from 'react';

import { withRouter } from "react-router";

interface DocViewerProps { }

const DocViewer: FunctionComponent<DocViewerProps> = () => {
  return (
    <>
      <div>
        <p>Preview</p>
      </div>
    </>
  );
};

export default withRouter(DocViewer);