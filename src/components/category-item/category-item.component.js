import "./category-item.styles.scss";
import { Link } from "react-router-dom";

const CategoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="category-body-container">
        <h2>{title}</h2>
        <Link className="nav-link" to="/shop">
          Shop Now
        </Link>
      </div>
    </div>
  );
};

export default CategoryItem;
