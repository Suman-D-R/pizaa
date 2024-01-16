import React from "react";
import image1 from "../assets/pizza1.jpg";
import image2 from "../assets/cheff.jpg";
import image3 from "../assets/fastdelivery.jpg";

function Dashboard() {
  return (
    <div className="w-full flex flex-col items-center my-10">
      <div className="flex flex-col gap-5 w-[80%]">
        <h1 className="text-center font-extrabold text-2xl">About Pizzeria</h1>
        <div className="flex flex-col gap-3 text-sm text-start">
          <p className="">
            There’s nothing cookie-cutter about Pizza Hut. Not our pizzas. Not
            our people. And definitely not the way we live life. Around here, we
            don’t settle for anything less than food we’re proud to serve. And
            we don’t just clock in. Not when we can also become our best, make
            friends, and have fun while we’re at it.
          </p>
          <p>
            We’re the pizza company that lives life unboxed. We’re not for
            people who want to blend in: pushing boundaries is part of our
            heritage.
          </p>
          <p>
            We have more than 16,000 restaurants and 350,000 team members in
            more than 100 countries. Whether it’s the original Stuffed Crust or
            putting a pizza in outer space, we never stop driving ourselves to
            deliver hot pizzas, fast every time – anywhere you want to enjoy it.
          </p>
        </div>
      </div>
      <div className="flex w-full flex-col items-center mt-10">
        <div className="flex w-[80%]">
          <div className="w-[50%] p-5 flex justify-center ">
            <img
              src={image1}
              className="lg:w-[300px] md:w-[200px] w-[200px] object-contain"
            ></img>
          </div>
          <div className="w-[50%] p-5 flex flex-col gap-3 justify-center">
            <p className="text-xl font-bold text-center">Ingredients </p>
            <p className="text-sm ">
              We're ruthless about goodness. We have no quaims about teanng up a
              day old lettuce leaf (straight from the farm), or steaming a baby
              (carrot) Cut Cut Chop Chop Steam, Steam. Stir Stir While they're
              still young and fresh that's our motto. It makes the kitchen a
              better place
            </p>
          </div>
        </div>
        <div className="flex w-[80%]">
          <div className="w-[50%] p-5 flex flex-col gap-3 justify-center">
            <p className="text-xl font-bold text-center">Our Cheffs </p>
            <p className="text-sm ">
              They make sauces sing and salads dance. They create magic with
              skill knowledge, passion, and stiring spoons (among other things)
              They make goodness so good, it doesn't know what to do with
              itself. We do though We send it to you
            </p>
          </div>
          <div className="w-[50%] p-5 flex justify-center ">
            <img
              src={image2}
              className="lg:w-[300px] md:w-[200px] w-[200px] object-contain"
            ></img>
          </div>
        </div>
        <div className="flex w-[80%]">
          <div className="w-[50%] p-5 flex justify-center ">
            <img
              src={image3}
              className="lg:w-[300px] md:w-[200px] w-[200px] object-contain"
            ></img>
          </div>
          <div className="w-[50%] p-5 flex flex-col gap-3 justify-center">
            <p className="text-xl font-bold text-center">
              Contactless Delivery{" "}
            </p>
            <p className="text-sm ">
              Helping to keep our customers and colleagues safe Given the
              evolving COVID-19 situation, we wanted to reassure you that the
              safety and wellbeing of customers and colleagues is always our top
              priority.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
