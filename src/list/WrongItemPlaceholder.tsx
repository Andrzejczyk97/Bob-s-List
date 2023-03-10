import * as React from "react";

export const WrongItemPlaceholder: React.FC = () => (
  <div className="row listItem wrongItem" data-test="wrong-item">
    <div className="column">Wrong data!</div>
  </div>
);
