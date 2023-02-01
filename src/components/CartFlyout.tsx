import { useStore } from "@nanostores/react";
import { useCallback } from "react";
import { cartItems, isCartOpen, removeItem } from "../cartStore";
import styles from "./CartFlyout.module.css";

export const CartFlyout = () => {
  const $isCartOpen = useStore(isCartOpen);
  const $cartItems = useStore(cartItems);

  return (
    <aside hidden={!$isCartOpen} className={styles.container}>
      {Object.values($cartItems).length ? (
        <ul className={styles.list} role="list">
          {Object.values($cartItems).map((cartItem) => (
            <li
              key={cartItem.id}
              className={styles.listItem}
              onClick={() => removeItem(cartItem.id)}
            >
              <img
                className={styles.listItemImg}
                src={cartItem.imageSrc}
                alt={cartItem.name}
              />
              <div>
                <h3>{cartItem.name}</h3>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="instructions">Not much to dream about here!</p>
      )}
      <button onClick={() => isCartOpen.set(!$isCartOpen)}>close</button>
    </aside>
  );
};
