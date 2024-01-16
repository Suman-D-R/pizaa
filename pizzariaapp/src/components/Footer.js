import React from "react";

function Footer() {
  return (
    <div className="w-full p-5 bg-black flex flex-col text-white items-center">
      <div className="w-full flex justify-between lg:w-[80%]">
        <div className="flex flex-col gap-3">
          <p className="font-bold">Order Now</p>
          <ul className="text-sm">
            <li>Deals</li>
            <li>Pizza</li>
            <li>Sides</li>
            <li>Drinks</li>
            <li>Desserts</li>
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <p className="font-bold"> About Us</p>
          <ul className="text-sm">
            <li>About Us</li>
            <li>Contactless Delivery</li>
            <li>Nutrition</li>
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <p className="font-bold">Our Policies</p>
          <ul className="text-sm">
            <li>Terms & Conditions</li>
            <li>FAQ & Help</li>
          </ul>
        </div>
      </div>
      <div>
        <p className="text-center text-gray-100 text-xs">
          Sinchana Y M © 2024 Pizzeria India. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
