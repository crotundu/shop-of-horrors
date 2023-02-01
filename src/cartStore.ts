import { atom, map } from "nanostores";

export const isCartOpen = atom(false);

export type CartItem = {
  id: string;
  name: string;
  imageSrc: string;
};

export type CartItemDisplayInfo = CartItem;

export const cartItems = map<Record<string, CartItem>>({});

export function addCartItem({ id, name, imageSrc }) {
  const existingEntry = cartItems.get()[id];
  if (!existingEntry) {
    cartItems.setKey(id, {
      id,
      name,
      imageSrc,
    });
  }
}
