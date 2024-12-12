import React, { useState } from "react";
import ProductCard from "../../components/product-card/product-card.component";
import PRODUCTS from "../../shop-data.json";
//import "./shop.styles.scss";
//import Button from "../../components/button/button.component";

const Shop = () => {
  //states
  const [filteredProducts, setFilteredProducts] = useState(PRODUCTS);
  const [activeButton, setActiveButton] = useState("all");

  //filter function
  // const filterProducts = (category) => {
  //   const filtered =
  //     category === "all"
  //       ? PRODUCTS
  //       : PRODUCTS.filter(
  //           (item) => item.category === category || item.gender === category
  //         );
  //   console.log("filtered products:", filtered);
  //   setFilteredProducts(filtered);
  //   setActiveButton(category);
  // };

  const filterProducts = (category) => {
    if (category === "all") {
      setFilteredProducts(PRODUCTS);
    }
    if (category === "men") {
      setFilteredProducts(PRODUCTS.filter((item) => item.gender === category));
    }
    if (category === "women") {
      setFilteredProducts(PRODUCTS.filter((item) => item.gender === category));
    }
    // if (category === "cap" || category === "jacket" || category === "sneaker") {
    //   setFilteredProducts(
    //     PRODUCTS.filter((item) => item.category === category)
    //   );
    // }
    setActiveButton(category);
  };

  //categories
  const categories = [
    { label: "ALL", category: "all" },
    { label: "CAPS", category: "cap" },
    { label: "JACKETS", category: "jacket" },
    { label: "SNEAKERS", category: "sneaker" },
    { label: "MEN", category: "men" },
    { label: "WOMEN", category: "women" },
  ];

  return (
    <div className="shop">
      {/* filter buttons */}
      <div className="filter-buttons">
        {categories.map(({ label, category }) => (
          <button
            key={category}
            onClick={() => filterProducts(category)}
            style={{
              fontFamily: "Open Sans Condensed",
              backgroundColor: activeButton === category ? "#000" : "#fff",
              color: activeButton === category ? "#fff" : "#000",
            }}
            buttonType={activeButton === category ? "inverted" : ""}
          >
            {label}
          </button>
        ))}
      </div>
      {/* Product List */}
      <div className="products-container">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <div>No Products Found</div>
        )}
      </div>
    </div>
  );
};

export default Shop;
