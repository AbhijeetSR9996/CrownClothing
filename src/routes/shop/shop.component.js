import { useState } from "react";
import ProductCard from "../../components/product-card/product-card.component";
import PRODUCTS from "../../shop-data.json";
import "./shop.styles.scss";
import Button from "../../components/button/button.component";

const Shop = () => {
  const [filteredProducts, setFilteredProducts] = useState(PRODUCTS);
  //Track active button
  const [activeButton, setActiveButton] = useState("all");
  //Track search term
  const [searchTerm, setSearchTerm] = useState("");

  //Filter by Caps
  const filterCaps = () => {
    const caps = PRODUCTS.filter((item) => item.category === "Cap");
    setFilteredProducts(caps);
    setActiveButton("caps"); //set active button
    setSearchTerm("");
  };

  //Filter by Caps
  const filterJackets = () => {
    const jackets = PRODUCTS.filter((item) => item.category === "Jacket");
    setFilteredProducts(jackets);
    setActiveButton("jackets"); //set active button
    setSearchTerm("");
  };

  //Filter by Sneakers
  const filterSneakers = () => {
    const sneakers = PRODUCTS.filter((item) => item.category === "Sneaker");
    setFilteredProducts(sneakers);
    setActiveButton("sneakers"); //set active button
    setSearchTerm("");
  };

  //Filter by Men
  const filterMen = () => {
    const men = PRODUCTS.filter((item) => item.gender === "men");
    setFilteredProducts(men);
    setActiveButton("men"); //set active button
    setSearchTerm("");
  };

  //Filter by Women
  const filterWomen = () => {
    const women = PRODUCTS.filter((item) => item.gender === "women");
    setFilteredProducts(women);
    setActiveButton("women"); //set active button
    setSearchTerm("");
  };

  //Show All Items
  const showAll = () => {
    setFilteredProducts(PRODUCTS);
    setActiveButton("all"); //set active button
    setSearchTerm("");
  };

  //handle search filtering
  const handleSearch = () => {
    //dynamically filter based on search term & active button
    const filtered = PRODUCTS.filter(
      (product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.gender.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredProducts(filtered);
    setActiveButton(""); //clear active button when searching
  };

  return (
    <div style={{ flex: 1 }}>
      {/* Search Bar */}
      <div
        style={{
          display: "flex",
          marginBottom: "20px",
          gap: "10px",
          justifyContent: "center",
        }}
      >
        <input
          type="text"
          placeholder="Search for products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            padding: "10px",
            width: "80%",
            maxWidth: "300px",
            border: "1px solid #ccc",
          }}
        />
        <Button
          onClick={handleSearch}
          style={{ fontFamily: "Open Sans Condensed" }}
        >
          {" "}
          SEARCH{" "}
        </Button>
        <Button onClick={showAll} style={{ fontFamily: "Open Sans Condensed" }}>
          {" "}
          RESET{" "}
        </Button>
      </div>
      &nbsp;
      {/* Product List */}
      {/* <div className="products-container">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div> */}
      <div className="products-container">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignContent: "center",
              height: "50vh",
              width: "195vh",
              textAlign: "center",
              //backgroundColor: "lime",
              //alignSelf: "center",
              //marginLeft: "40vh",
            }}
            //className="products-container"
          >
            <h3 style={{ margin: "10px 0" }}>No products found..!!</h3>
            <p style={{ margin: "0" }}>
              Try adjusting your search or filter criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
