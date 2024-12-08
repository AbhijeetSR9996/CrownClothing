import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const images = [
    {
      id: 1,
      label: "hats",
      filter: "hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    },
    {
      id: 2,
      label: "jackets",
      filter: "jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    },
    {
      id: 3,
      label: "sneakers",
      filter: "sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    },
    {
      id: 4,
      label: "womens",
      filter: "womens",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    },
    {
      id: 5,
      label: "mens",
      filter: "mens",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    },
  ];

  const handleNavigation = (filter) => {
    navigate(`/shop?filter=${filter}`);
  };

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "10px",
      }}
    >
      {images.map((image) => (
        <div
          key={image.id}
          style={{
            backgroundImage: `url(${image.imageUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "300px",
            width: "400px",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            cursor: "pointer",
            overflow: "hidden",
            border: "1px solid black",
          }}
          onClick={() => handleNavigation(image.filter)}
        >
          <span
            style={{
              backgroundColor: "white",
              alignItems: "center",
              justifyContent: "center",
              padding: "10px 20px",
              //padding: '0 25px',
              margin: "0 6px 0",
              fontSize: "16px",
              //borderRadius:'5px',
              fontWeight: "bolder",
              color: "#4a4a4a",
              opacity: "0.7",
              border: "1px solid black",
              position: "relative",
            }}
          >
            {image.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Home;
