import toast from "react-hot-toast";

export const getFavorites = () => {
  const favorites = localStorage.getItem("favorites");
  if (favorites) {
    return JSON.parse(favorites);
  }
  return [];
};

export const addFavorite = (phone) => {
  const favorites = getFavorites();

  const isExist = favorites.find((p) => p.id === phone.id);
  if (isExist) return console.log("saved");
  favorites.push(phone);
  toast.success("favorite added")
  localStorage.setItem("favorites", JSON.stringify(favorites));
};

export const removeFavorites = (id) => {
  const favorites = getFavorites();
  const remainingFavorites = favorites.filter((f) => f.id !== id);
  localStorage.setItem("favorites", JSON.stringify(remainingFavorites));
};





// cart



export const getCart = () => {
  const cart = localStorage.getItem("cart");
  if (cart) {
    return JSON.parse(cart);
  }
  return [];
};

export const addCart = (phone) => {
  const cart = getCart();

  const isExist = cart.find((p) => p.id === phone.id);
  if (isExist) return console.log("saved");
  cart.push(phone);
  toast.success("cart added")

  localStorage.setItem("cart", JSON.stringify(cart));
};

export const removeCart = (id) => {
  const cart = getCart();
  const remainingCarts = cart.filter((f) => f.id !== id);
  localStorage.setItem("cart", JSON.stringify(remainingCarts));
};
