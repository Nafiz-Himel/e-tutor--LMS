import { createContext, useState, useEffect } from "react";

const CartContext = createContext(null);

export default CartContext;

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem("e-tutor-cart");
    return saved ? JSON.parse(saved) : [];
  });

  const [wishlist, setWishlist] = useState(() => {
    const saved = localStorage.getItem("e-tutor-wishlist");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("e-tutor-cart", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem("e-tutor-wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const addToCart = (course) => {
    setCartItems((prev) => {
      if (prev.find((item) => item.id === course.id)) return prev;
      return [...prev, course];
    });
  };

  const removeFromCart = (courseId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== courseId));
  };

  const toggleWishlist = (courseId) => {
    setWishlist((prev) =>
      prev.includes(courseId) ? prev.filter((id) => id !== courseId) : [...prev, courseId]
    );
  };

  return (
    <CartContext.Provider value={{ cartItems, wishlist, addToCart, removeFromCart, toggleWishlist }}>
      {children}
    </CartContext.Provider>
  );
};
