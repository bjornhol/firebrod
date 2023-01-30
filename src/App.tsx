import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { grytebrod, havreflette, rundstykker } from "./oppskrifter";
import OppskriftLang from "./components/OppskriftLang";
import { routerPaths } from "./router.path";
import Tips from "./components/Tips";
import { Layout } from "./Layout";

import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={routerPaths.grytebrod} element={<OppskriftLang {...grytebrod} />} />
          <Route path={routerPaths.havreflette} element={<OppskriftLang {...havreflette} />} />                      
          <Route path={routerPaths.rundstykker} element={<OppskriftLang {...rundstykker} />} />
          <Route path={routerPaths.tips} element={<Tips />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
