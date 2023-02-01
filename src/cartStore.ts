import { atom, map } from "nanostores";
import { persistentAtom } from "@nanostores/persistent";

export const isCartOpen = atom(false);

export type CartItem = {
  id: string;
  name: string;
  imageSrc: string;
};

export type CartItemDisplayInfo = CartItem;

export const cartItems = persistentAtom<Record<string, CartItem>>(
  "cart",
  {},
  {
    encode: JSON.stringify,
    decode: JSON.parse,
  }
);

export const addCartItem = ({ id, name, imageSrc }) => {
  cartItems.set({
    ...cartItems.get(),
    [id]: {
      id,
      name,
      imageSrc,
    },
  });
};

export const removeItem = (id: string) => {
  const { [id]: _, ...rest } = cartItems.get();
  cartItems.set(rest);
};
