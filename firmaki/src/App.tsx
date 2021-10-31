import React from "react";
// something similar to normalize.css
import CssBaseline from "@mui/material/CssBaseline";

import Layout from "./components/layout/layout";

function App() {
  return (
    <>
      <CssBaseline />
      <Layout>
        <p>Hello again!</p>
      </Layout>
    </>
  );
}

export default App;
