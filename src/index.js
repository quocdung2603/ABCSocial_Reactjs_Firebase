import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes } from "react-router-dom";
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import reportWebVitals from "./reportWebVitals";

import ThemeProvider from "./contexts/ThemeProvider";

//routes
import { layoutRoute } from "routes/layoutRoute";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {layoutRoute.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
