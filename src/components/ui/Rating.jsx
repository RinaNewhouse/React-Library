import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Rating = ({ rating }) => {
  return (
    <div className="book__ratings">
      {
        // Math. allows decimals to be included in arrays. Floor means that decimals ≤0.5 will be rounded down. (Math.Ceiling means that decimals ≥0.5 will be rounded up.)
        // When you are mapping something, then you need a key, usually saying index or ___.id.
        new Array(Math.floor(rating)).fill(0).map((_, index) => (
          <FontAwesomeIcon icon="star" key={index} />
        ))
      }

      {/* Ternary Operator #1 */}
      {Number.isInteger(rating) ? "" : <FontAwesomeIcon icon="star-half-alt" />}

      {/* Another Valid Way. But only do this when the ? would print out absolutely nothing otherwise. Haha. */}
      {/* {
        !Number.isInteger(book.rating) && <FontAwesomeIcon icon="star-half-alt" />
        } */}
    </div>
  );
};

export default Rating;
