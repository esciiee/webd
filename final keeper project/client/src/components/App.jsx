import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Header from "./Header";
import Footer from "./Footer";
import Home  from "./Home";


function App() {
  const user = false;
  return (
    <BrowserRouter>
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={user ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/register"
          element={user ? <Navigate to="/" /> : <Register />}
        />
      </Routes>

      <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
