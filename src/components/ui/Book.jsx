import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Book = ( {book} ) => {
    return (
        <div className="book">
              <a href="/">
                <figure className="book__img--wrapper">
                  <img
                    src={book.url}
                    alt=""
                    className="book__img"
                  />
                </figure>
              </a>
              <div className="book__title">
                <a href="/" className="book__title--link">
                  {book.title}
                </a>
              </div>
              <div className="book__ratings">
                {
                    // Math. allows decimals to be included in arrays. Floor means that decimals ≤0.5 will be rounded down. (Math.Ceiling means that decimals ≥0.5 will be rounded up.)
                    // When you are mapping something, then you need a key, usually saying index or ___.id.
                    new Array(Math.floor(book.rating)).fill(0).map((_, index) => <FontAwesomeIcon icon="star" key={index} />)
                }
                {/* Ternary Operator */}
                {
                    Number.isInteger(book.rating) 
                    ? '' 
                    : <FontAwesomeIcon icon="star-half-alt" />
                }
                {/* Another Valid Way. But only do this when the ? would print out absolutely nothing otherwise. Haha. */}
                {/* {
                    !Number.isInteger(book.rating) && <FontAwesomeIcon icon="star-half-alt" />
                } */}
              </div>
              <div className="book__price">
                {book.salePrice ? (
                    // If there is a sale, show the crossed-out original price and the sale price.
                    <>
                        <span className="book__price--normal">${book.originalPrice.toFixed(2)}</span>
                        ${book.salePrice.toFixed(2)}
                    </>
                    // But if there is not a sale...
                ) : (
                    // Then just show the regular price only, nada más.
                    <>
                        ${book.originalPrice.toFixed(2)}
                    </>
                )}
              </div>
            </div>
    );
}

export default Book;