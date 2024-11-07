import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import './index.css';

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
    price: 12,
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

function App() {
  const [searchQuery, setSearchQuery] = useState(""); 


  const filteredPizzas = pizzaData.filter((pizza) =>
    pizza.name.toLowerCase().includes(searchQuery.toLowerCase()) 
  );

  return (
    <div>
      <Header />
      <SearchBar setSearchQuery={setSearchQuery} />
      <MenuTag />
      <Tagline /> 
      <Menu pizzas={filteredPizzas} />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <h1 style={{ color: "orange", fontSize: "48px", textTransform: "uppercase", textAlign: "center" }}>
      Jian Yu's Pizza Co.
    </h1>
  );
}

function SearchBar({ setSearchQuery }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for a pizza..."
        onChange={(e) => setSearchQuery(e.target.value)} 
      />
    </div>
  );
}

function Pizza({ name, ingredients, price, photoName, soldOut }) {
  return (
    <div className="pizza">
      <img src={photoName} alt={name} />
      <h2>{name}</h2>
      <p>{ingredients}</p>
      <p>{soldOut ? "Sold Out" : `$${price}`}</p>
    </div>
  );
}

function Menu({ pizzas }) {
  return (
    <div className="menu">
      {pizzas.map((pizza, index) => (
        <Pizza
          key={index}
          name={pizza.name}
          ingredients={pizza.ingredients}
          price={pizza.price}
          photoName={pizza.photoName}
          soldOut={pizza.soldOut}
        />
      ))}
    </div>
  );
}

function MenuTag() {
  return (
    <div className="menu-title">
      <h2>OUR MENU</h2>
    </div>
  );
}

function Tagline() {
  return (
    <div className="tagline-container">
      <p className="tagline">Authentic Italian Cuisine</p>
    </div>
  );
}

function Footer() {
  const currentHour = new Date().getHours();
  return (
    <div className="footer">
      {currentHour >= 10 && currentHour < 22 ? (
        <div>
          <p className="footer-text">We're currently open</p>
          <button className="bottom-button">Order</button>
        </div>
      ) : (
        <div>
          <p>We're currently closed</p>
        </div>
      )}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);