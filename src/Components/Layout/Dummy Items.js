import React from "react";
import "../Layout/Header.css";

import User from "../User Input/User Input";
import Menu from "../MENU/Menu";
import NewProductsMenu from "../NEW PRODUCTS/New products";
import About from "../About/About";
const Dummy = (props) => {
  const Arr = [
    {
      name: "Sushi",
      item: "Finest Fish and veggies",
      amount: 22.08,
    },
    {
      name: "Burger",
      item: "Juicy beef patty with chinese",
      amount: 20,
    },
    {
      name: "Pizza",
      item: "Delicious combination of toppings",
      amount: 18.95,
    },
    {
      name: "Green Bowl",
      item: "Healthy...and green",
      amount: 100.04,
    },
  ];

  return (
    <div className="All">
      <div className="All-dummy-items">
        {Arr.map((item, index) => (
          <li key={index} className="data">
            <h2>{item.name}</h2>
            <p>{item.item}</p>
            <h2 className="Amount">{item.amount}</h2>

            <User name={item.name} amount={item.amount} inputs={item.inputs} />
          </li>
        ))}
      </div>
      <div style={{ backgroundColor: "black" }}>
        <Menu />
        <NewProductsMenu />
        <About />
      </div>
    </div>
  );
};

export default Dummy;
