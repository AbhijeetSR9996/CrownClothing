import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ProductCard from "../../components/product-card/product-card.component";
import PRODUCTS from "../../shop-data.json";
import "./shop.styles.scss";
import Button from "../../components/button/button.component";

const Shop = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const filter = params.get("filter");

  useEffect(() => {
    if (filter) {
      applyFilter(filter);
    }
  }, [filter]);

  const applyFilter = (filter) => {
    console.log(`Filter applied: ${filter}`);
    document.getElementById(filter)?.click();
  };

  const [filteredProducts, setFilteredProducts] = useState(PRODUCTS);
  //Track active button
  const [activeButton, setActiveButton] = useState("all");

  //Filter by Caps
  const filterCaps = () => {
    const caps = PRODUCTS.filter((item) => item.category === "Cap");
    setFilteredProducts(caps);
    setActiveButton("caps"); //set active button
  };

  //Filter by Caps
  const filterJackets = () => {
    const jackets = PRODUCTS.filter((item) => item.category === "Jacket");
    setFilteredProducts(jackets);
    setActiveButton("jackets"); //set active button
  };

  //Filter by Sneakers
  const filterSneakers = () => {
    const sneakers = PRODUCTS.filter((item) => item.category === "Sneaker");
    setFilteredProducts(sneakers);
    setActiveButton("sneakers"); //set active button
  };

  //Filter by Women
  const filterWomen = () => {
    const women = PRODUCTS.filter((item) => item.gender === "women");
    setFilteredProducts(women);
    setActiveButton("women"); //set active button
  };

  //Filter by Men
  const filterMen = () => {
    const men = PRODUCTS.filter((item) => item.gender === "men");
    setFilteredProducts(men);
    setActiveButton("men"); //set active button
  };

  //Show All Items
  const showAll = () => {
    setFilteredProducts(PRODUCTS);
    setActiveButton("all"); //set active button
  };

  return (
    <div style={{ flex: 1 }}>
      {/* Buttons */}
      <div style={{ display: "flex", gap: "5px", justifyContent: "center" }}>
        <Button
          id="all"
          onClick={showAll}
          style={{ fontFamily: "Open Sans Condensed" }}
          buttonType={activeButton === "all" ? "" : "inverted"}
        >
          ALL
        </Button>
        <Button
          id="hats"
          onClick={filterCaps}
          style={{ fontFamily: "Open Sans Condensed" }}
          buttonType={activeButton === "caps" ? "" : "inverted"}
        >
          {" "}
          HATS{" "}
        </Button>
        <Button
          id="jackets"
          onClick={filterJackets}
          style={{ fontFamily: "Open Sans Condensed" }}
          buttonType={activeButton === "jackets" ? "" : "inverted"}
        >
          {" "}
          JACKETS{" "}
        </Button>
        <Button
          id="sneakers"
          onClick={filterSneakers}
          style={{ fontFamily: "Open Sans Condensed" }}
          buttonType={activeButton === "sneakers" ? "" : "inverted"}
        >
          {" "}
          SNEAKERS{" "}
        </Button>
        <Button
          id="womens"
          onClick={filterWomen}
          style={{ fontFamily: "Open Sans Condensed" }}
          buttonType={activeButton === "women" ? "" : "inverted"}
        >
          {" "}
          WOMENS{" "}
        </Button>
        <Button
          id="mens"
          onClick={filterMen}
          style={{ fontFamily: "Open Sans Condensed" }}
          buttonType={activeButton === "men" ? "" : "inverted"}
        >
          {" "}
          MENS{" "}
        </Button>
      </div>
      &nbsp;
      {/* Product List */}
      <div className="products-container">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
