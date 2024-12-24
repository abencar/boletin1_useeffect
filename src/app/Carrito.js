import React, { useState, useEffect } from "react";

export default function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addItemToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeItemFromCart = (itemId) => {
    setCart(cart.filter((item) => item.id !== itemId));
  };

  return (
    <div>
      <h1>Carrito de Compras</h1>
      <button onClick={() => addItemToCart({ id: Date.now(), name: "Producto 1" })}>
        Agregar Producto 1
      </button>
      <button onClick={() => addItemToCart({ id: Date.now(), name: "Producto 2" })}>
        Agregar Producto 2
      </button>
      <h2>Productos en el carrito:</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => removeItemFromCart(item.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
