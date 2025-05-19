import React from "react";

const Price = ({ salePrice, originalPrice }) => {
  return (
    <div className="book__price">
      {salePrice ? (
        // If there is a sale, show the crossed-out original price and the sale price.
        <>
          <span className="book__price--normal">
            ${originalPrice.toFixed(2)}
          </span>
          ${salePrice.toFixed(2)}
        </>
      ) : (
        // But if there is not a sale...
        // Then just show the regular price only, nada más.
        <>${originalPrice.toFixed(2)}</>
      )}
    </div>
  );
};

export default Price;
