import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// something similar to normalize.css
import CssBaseline from "@mui/material/CssBaseline";

import Layout from "./components/layout/layout";

import SignatureScreen from "./modules/signature/screens/signature.screen";

function App() {
  return (
    <>
      <CssBaseline />
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/signature">
              <SignatureScreen />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </>
  );
}

export default App;
