import { useEffect, useState } from "react";
import "./pages.css";
import { useBasket } from "../context/Basket";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const { basket, addBasket } = useBasket();

  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await fetch("http://localhost:3000/products");
        const jsonData = await response.json();
        setProducts(jsonData);
      };
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const [productCounts, setProductCounts] = useState({});

  const handleAddToBasket = (item) => {
    addBasket(item);
    setProductCounts((prevCounts) => ({
      ...prevCounts,
      [item.id]: (prevCounts[item.id] || 0) + 1,
    }));
  };

  return (
    <div className="divcard">
      {products &&
        products.map((item) => (
          <ul className="uls" key={item.id}>
            <li>{item.category}</li>
            <li>{item.manufacturer}</li>
            <li>{item.model}</li>
            <li>{item.price}$</li>
            <button onClick={() => handleAddToBasket(item)}>Add To Basket</button>
            <span>{productCounts[item.id] || 0}</span>
          </ul>
        ))}
    </div>
  );
};

export default HomePage;
