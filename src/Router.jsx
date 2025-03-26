import { Routes, Route } from "react-router-dom";

import { Inicial } from "./pages";


const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Inicial />}></Route>
    </Routes>
  );
};

export { Router };