import { useLocation, useNavigate } from "react-router-dom";
import "./Post.css";

function Post() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const {
    brand,
    category,
    description,
    discountPercentage,
    images,
    price,
    rating,
    stock,
    title,
  } = state;
  return (
    <div className="containerWrapper">
      <div className="wrapperCard">
        <div className="descriptionCard">
          <h3>Name product: {title}</h3>
          <p>Brand: {brand}</p>
          <p>Category: {category}</p>
          <p>Description: {description}</p>
          <p>Price: {price}$</p>
          <p>Discount: {discountPercentage}%</p>
          <p>Rating: {rating}</p>
          <p>Stock: {stock}</p>
        </div>
        <div className="imagesCardWrapper">
          {!!images.length &&
            images.map((img, idx) => (
              <img
                className="imgCard"
                key={`porduct-${idx}`}
                src={img}
                alt="product"
              />
            ))}
        </div>
      </div>
      <button className="buttonCard" onClick={() => navigate(-1)}>
        Back
      </button>
    </div>
  );
}

export default Post;
