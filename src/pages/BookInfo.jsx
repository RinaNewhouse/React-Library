import React from "react";
import { Link } from "react-router-dom";
import Rating from "../components/ui/Rating";
import Price from '../components/ui/Price'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BookInfo = ({ books }) => {
  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="books__selected--top">
              <Link to="/books" className="book__link">
                <FontAwesomeIcon icon="arrow-left" />
              </Link>
              <Link to="/books" className="book__link">
                <h2 className="book__selected--title--top">Books</h2>
              </Link>
            </div>
            <div className="book__selected">
              <figure className="book__selected--figure">
                <img src={books.url} alt="" className="book__selected--img" />
              </figure>
              <div className="book__selected--description">
                <div className="book__selected--title">{books.title}</div>
                <Rating />
                <div className="book__selected--price">
                    <Price />
                </div>
                <div className="book__summary">
                    <div className="book__summary--title">
                        Summary
                    </div>
                    <p className="book__summary__para">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                        Voluptatibus provident distinctio, facere quia laborum 
                        itaque iure eaque commodi dolores obcaecati, voluptate porro 
                        fuga dolore unde sapiente quidem laboriosam atque similique!
                    </p>
                    <p className="book__summary__para">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                        Voluptatibus provident distinctio, facere quia laborum 
                        itaque iure eaque commodi dolores obcaecati, voluptate porro 
                        fuga dolore unde sapiente quidem laboriosam atque similique!
                    </p>
                </div>
                <button className="btn">
                    Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="books__container">
            <div className="row">
                <div className="book__selected--top">
                    <h2 className="book__selected--title--top">
                        Recommended Books
                    </h2>
                </div>
            </div>
        </div>
      </main>
    </div>
  );
};

export default BookInfo;
