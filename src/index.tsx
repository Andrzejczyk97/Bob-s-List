import React from "react";
import { createRoot } from "react-dom/client";
import { createAppStoreWithUpdates } from "./notesStorage";

import { App } from "./App";

createAppStoreWithUpdates();

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
createRoot(document.getElementById("root")!)
  .render(
    // <React.StrictMode>
      <App />
    // </React.StrictMode>,
  );
