import { BrowserRouter } from "react-router-dom";

import { Router } from "./Router";

import './index.css';



const App = () => {
  return (
      <BrowserRouter>
        <Router />
      </BrowserRouter>
  );
};

export { App };
