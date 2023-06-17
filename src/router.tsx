import * as React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Start from "./start";

const Router = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;