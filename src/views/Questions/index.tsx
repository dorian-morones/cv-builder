
import React, { FunctionComponent } from 'react';

// Routes
import {
  Link
} from "react-router-dom";
import { withRouter } from "react-router";

interface QuestionsViewProps { }

const QuestionsView: FunctionComponent<QuestionsViewProps> = () => {
  return (
    <div>
      <p>QuestionsView</p>
      <p>ededwedwe</p>
      <Link to="/">home</Link>

    </div>
  );
};

export default withRouter(QuestionsView);