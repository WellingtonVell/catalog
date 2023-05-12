import { BrowserRouter, Route, Routes} from "react-router-dom";
import ReactDOM from "react-dom/client";
import React from "react";
import Admin from "./Admin";
import App from "./App";


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>    
      <Routes>
            <Route path="/" element={<App />} />
            <Route path="/Admin" element={<Admin />}/>
        </Routes>   
  </BrowserRouter>

);
