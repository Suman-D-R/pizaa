import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import ShoppingCart from "./components/ShoppingCart";
import { Provider } from "react-redux";
import store from "./utils/store/appStore.js";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="w-full">
          <Header />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/home" element={<Home />} />
            <Route path="/cart" element={<ShoppingCart />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
