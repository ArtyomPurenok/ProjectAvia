import React from "react";
import "./App.css";
import { HomePage } from "./Pages/HomePage";
import { BrowserRouter, Route, Routes, } from "react-router-dom";
import { SingInOut } from "./Pages/SingInOut/SingInOut";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<SingInOut />} />
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
