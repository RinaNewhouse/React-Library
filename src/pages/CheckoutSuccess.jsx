import React, { useEffect } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const CheckoutSuccess = ({ clearCart }) => {
  useEffect(() => {
    // Clear cart on successful checkout
    if (clearCart) {
      clearCart();
    }
  }, [clearCart]);

  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <h2 className="cart__title">Order Confirmed!</h2>
            </div>
            <div style={{ 
              textAlign: 'center', 
              padding: '48px 24px',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              <div style={{ 
                fontSize: '64px', 
                marginBottom: '24px',
                color: '#7342d6'
              }}>
                ✓
              </div>
              <h2 style={{ 
                fontSize: '32px', 
                marginBottom: '16px',
                color: '#242424'
              }}>
                Thank you for your purchase!
              </h2>
              <p style={{ 
                fontSize: '18px', 
                marginBottom: '32px',
                color: '#666'
              }}>
                Your order has been successfully processed. You will receive a confirmation email shortly.
              </p>
              <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
                <Link to="/books">
                  <button className="btn">Continue Shopping</button>
                </Link>
                <Link to="/">
                  <button className="btn" style={{ 
                    backgroundColor: 'transparent',
                    border: '2px solid #7342d6',
                    color: '#7342d6'
                  }}>
                    Back to Home
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CheckoutSuccess;

