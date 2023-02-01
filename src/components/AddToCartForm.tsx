import { isCartOpen, addCartItem } from "../cartStore";
import type { CartItemDisplayInfo } from "../cartStore";
import { FormEvent, PropsWithChildren, useCallback, useEffect } from "react";

type Props = {
  item: CartItemDisplayInfo;
};

export const AddToCartForm = ({ item, children }: PropsWithChildren<Props>) => {
  useEffect(() => {
    console.log("AddToCartForm Loaded");
  }, []);

  const addToCart = useCallback((e: FormEvent) => {
    e.preventDefault();
    isCartOpen.set(true);
    addCartItem(item);
  }, []);

  return <form onSubmit={addToCart}>{children}</form>;
};
