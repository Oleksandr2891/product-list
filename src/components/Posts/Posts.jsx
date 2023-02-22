import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Posts.css";

function Posts() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => setPosts(data.products))
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }, []);

  return (
    <ul className="containerWrapper">
      {!!posts.length &&
        posts.map((item) => {
          return (
            <li
              className="itemWrapper"
              key={item.id}
              onClick={() => {
                navigate(`/task1/products/${item?.id}`, { state: { ...item } });
              }}
            >
              <div className="itemDescription">
                <h3>Product name: {item.title}</h3>
                <p>Description: {item.description}</p>
                <p className="itemPrice">Price: {item.price}</p>
              </div>
              <img
                className="itemImg"
                src={item.thumbnail}
                alt={`product of ${item.title}`}
              />
            </li>
          );
        })}
      <button className="buttonBack" onClick={() => navigate(-1)}>
        Back
      </button>
    </ul>
  );
}

export default Posts;
