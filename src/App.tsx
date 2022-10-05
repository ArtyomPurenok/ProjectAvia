import React from "react";
import "./App.css";
import { HomePage } from "./Pages/HomePage";
import { BrowserRouter, Route, Routes, } from "react-router-dom";
import { Login } from "./Pages/Login/Login";
import { Register } from "./Pages/Register/Register";
import { SingInOut } from "./components/SingInOut/SingInOut";
import { Form } from "./components/SingInOut/Form";
import { SingUP } from "./components/SingInOut/SingUP";
import { SingIN } from "./components/SingInOut/SingIN";
// import { ScrollToTop } from "./components/ScrollToTop/ScrollToTop";
function App() {
  return (

    <BrowserRouter>
      <Routes>

        {/* <ScrollToTop /> */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<SingInOut />} />
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
