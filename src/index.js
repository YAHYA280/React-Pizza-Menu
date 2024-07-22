import React from "react";
import ReadctDom from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 52,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

const App = () => {
  return (
    <div>
      <Header />
      <Menu />;
    </div>
  );
};

const root = ReadctDom.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const Header = () => {
  return (
    <div className="header">
      <h1>Fast React Pizza CO</h1>
    </div>
  );
};

const Menu = () => {
  const pizzanum = pizzaData;
  return (
    <main className="menu">
      <h2>Our menu</h2>

      {pizzanum && (
        <>
          <p>
            Authentic italien cuisine, 6 creative dishes to choose from, All
            from our stone oven , all organic , all delicious.
          </p>

          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      )}

      <Footer />
    </main>
  );
};

const Pizza = ({ pizzaObj }) => {
  return (
    <div className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt="pizaa imagge" />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "Sold Out " : pizzaObj.price}</span>
      </div>
    </div>
  );
};

const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  return (
    <footer className="footer">
      {(isOpen && <Order closeHour={closeHour} />) || (
        <p>
          Sorry Come Back In Working Hours {openHour}:00 to {closeHour}:00
        </p>
      )}
    </footer>
  );
};

const Order = ({ closeHour }) => {
  return (
    <div className="order">
      <p>We are Open until {closeHour}:00 Come vist us orOrder online</p>
      <button className="btn">Order</button>
    </div>
  );
};

// const SkillList = () => {
//   return (
//     <div>
//       <ul className="skill-list">
//         <li className="skill">ok</li>
//         <li className="skill">tes1</li>
//         <li className="skill">test3</li>
//         <div className="skill">test 4</div>
//       </ul>
//     </div>
//   );
// };

// const Intro = () => {
//   return (
//     <div>
//       <h1>Yahya Elmokhtari</h1>
//       <p>
//         this is a breaf introduction to my learinign fo react am so happy that i
//         ve started this cours and am willing to do my bbest{" "}
//       </p>
//     </div>
//   );
// };

// const Avatar = () => {
//   return (
//     <div>
//       <img className="avatar" src={"pizzas/focaccia.jpg"} alt="an aimage" />
//     </div>
//   );
// };
