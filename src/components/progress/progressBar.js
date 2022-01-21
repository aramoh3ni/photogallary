import React from "react";

import { Progress } from "semantic-ui-react";

export const ProgressBar = ({ progress }) => {
  return (
    <Progress
      size="tiny"
      color="blue"
      percent={progress}
    />
  );
};
