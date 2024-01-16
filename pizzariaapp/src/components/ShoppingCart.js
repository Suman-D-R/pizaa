import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import CartCard from "./CartCard";

function ShoppingCart() {
  const data = useSelector((store) => store.cart.cartItems);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    // Calculate total when data changes
    const calculatedTotal = data.reduce((acc, item) => acc + item.price*item.quantity, 0);
    setTotal(calculatedTotal);
  }, [data]);

  return (
    <div className="min-h-[70vh] flex justify-center my-10">
      {data.length ? (
        <div className="w-[80%] grid grid-cols-1 gap-5">
          {data.map((val) => {
            return <CartCard key={val.id} data={val} />;
          })}
          <div className="flex gap-4 w-[100%] shadow-xl rounded-md border-[1px] justify-evenly border-gray-300 p-5">
            <p className="font-semibold">Total: Rs.{total}</p>
            <button className="shadow-md rounded-md border-[1px] bg-orange-400 p-1 h-[40px] font-semibold">
              Place order
            </button>
          </div>
        </div>
      ) : (
        <div>empty cart</div>
      )}
    </div>
  );
}

export default ShoppingCart;
