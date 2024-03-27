import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Redirect, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

import ThemeProvider from "./contexts/ThemeProvider";
import PageEx from "views/guest/PageEx";


//routes
import { pageExRoute, GroupRoute } from "routes";
console.log("🚀 ~ pageExRoute:", pageExRoute)

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
      {/* <Route path="/pageEx" element={<PageEx />} /> */}
        {pageExRoute.map((route, index) => (<Route key={index} path={route.path} element={route.element} />))}
        {GroupRoute.map((route, index) => (<Route key={index} path={route.path} element={route.element} />))}
      </Routes>
    </BrowserRouter>
  );
}
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
