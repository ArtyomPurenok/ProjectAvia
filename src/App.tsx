import React from "react";
import "./App.css";
import { HomePage } from "./Pages/HomePage";
import { BrowserRouter, Route, Routes, } from "react-router-dom";
import { Login } from "./Pages/Login/Login";
import { Register } from "./Pages/Register/Register";
// import { ScrollToTop } from "./components/ScrollToTop/ScrollToTop";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <ScrollToTop /> */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="*"
          element={
            <main style={{ padding: '1rem' }}>
              <p>404 Not Found</p>
            </main>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
