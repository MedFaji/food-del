import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);
export const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems({ ...cartItems, [itemId]: 1 });
    } else {
      setCartItems({ ...cartItems, [itemId]: cartItems[itemId] + 1 });
    }
  };

  const removeFromCart = (itemId) => {
    if (cartItems[itemId] === 1) {
      const newCartItems = { ...cartItems };
      delete newCartItems[itemId];
      setCartItems(newCartItems);
    } else {
      setCartItems({ ...cartItems, [itemId]: cartItems[itemId] - 1 });
    }
  };

  const getTotalCartAmount = () => {
    let total = 0;
    for (const itemId in cartItems) {
      if (cartItems[itemId] > 0) {
        let item = food_list.find((item) => item._id === itemId);
        total += item.price * cartItems[itemId];
      }
    }
    return total;
  };
  const getCartItemsCount = () => {
    let count = 0;
    for (const itemId in cartItems) {
      count += cartItems[itemId];
    }
    return count;
  };

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    getCartItemsCount,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};
