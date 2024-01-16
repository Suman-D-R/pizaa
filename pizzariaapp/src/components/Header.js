import React from "react";
import logo from "../assets/PizzeriaLogo.png";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  return (
    <div className="bg-black font-semibold text-white p-2 flex justify-between lg:px-10">
      <div className="flex gap-5 items-center">
        <h1 className="font-bold text-xl">Pizzeria</h1>
        <img className="h-10" alt="logo" src={logo}></img>
        <Link to="/">Home</Link>
        <Link to="/home">Order Pizza</Link>
        <Link to="/buildpizza">Build Ur Pizza</Link>
      </div>
      <div className="">
        <button className="px-5 py-2 rounded-lg bg-yellow-500 flex items-center justify-center">
          <Link to="cart">Shopping Cart</Link>
        </button>
      </div>
    </div>
  );
}

export default Header;
