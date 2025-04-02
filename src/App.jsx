import { BrowserRouter } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import { Router } from "./Router";

import './index.css';



const App = () => {
  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://maragonesateixeira.adv.br/" />
      </Helmet>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  );
};

export { App };
