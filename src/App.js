import './index.css';
import Nav from './components/Nav';
import Home from './pages/Home';
import Books from './pages/Books';
import { books } from "./data";
import Footer from './components/Footer';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import BookInfo from './pages/BookInfo'
import Cart from './pages/Cart'
import React, { useState, useEffect } from 'react';

function App() {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);

  function addToCart(book) {
    setCart([...cart, { ...book, quantity: 1 }]);
    localStorage.setItem(
      "cart",
      JSON.stringify([...cart, { ...book, quantity: 1 }])
    );
  }

  function changeQuantity(book, quantity) {
    setCart(
      cart.map((item) => item.id === book.id
        ? {
          ...item,
          quantity: +quantity,
        }
        : item
      )
    );
  }

  useEffect (() => {
    console.log(cart)
  }, [cart])

  function removeItem(item) {
    setCart(cart.filter(book => book.id !== item.id))
  }

  function numberOfItems() {
    let counter = 0;
    cart.forEach(item => {
      counter += item.quantity
    })
    return counter;
  }

  return (
    <Router>
      <div className="App">
        <Nav numberOfItems={numberOfItems} />
        <Route path="/" exact component={Home} />
        <Route path="/books" exact render={() => <Books books={books} />} />
        <Route path="/books/:id" render={() => <BookInfo books={books} addToCart={addToCart} cart={cart} />} />
        <Route path="/cart" render={() => <Cart books={books} cart={cart} changeQuantity={changeQuantity} removeItem={removeItem} />} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
