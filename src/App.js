import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
// import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
// import FloatingButtons from "./components/FloatingButtons";
import Home from "./pages/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import "./App.css";


function App() {

  return (
   <div className="App">
      <Navbar />

      {/* ONLY HOME PAGE */}
      <Home />

      <Footer />
    </div>
  );
}

export default App;