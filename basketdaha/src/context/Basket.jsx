// BasketProvider.jsx
import React, { createContext, useContext, useState } from "react";

const BasketContext = createContext();

export const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useState([]);

  const addBasket = (item) => {
    const productIndex = basket.findIndex((basketItem) => basketItem.id === item.id);

    if (productIndex !== -1) {
      const updatedBasket = [...basket];
      updatedBasket[productIndex] = { ...item, count: updatedBasket[productIndex].count + 1 };
      setBasket(updatedBasket);
    } else {
      setBasket([...basket, { ...item, count: 1 }]);
    }
  };

  const basketData = {
    basket,
    addBasket,
  };

  return (
    <BasketContext.Provider value={basketData}>
      {children}
    </BasketContext.Provider>
  );
};

export const useBasket = () => {
  const context = useContext(BasketContext);
  return context;
};
