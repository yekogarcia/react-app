import { useProduct } from "../hooks/useProduct";

import styles from "../styles/styles.module.css";
import { CSSProperties, ReactElement, createContext } from "react";
import { Product, ProductContextProps } from "../interfaces/interfaces";
import { ProductTitle } from "./ProductTitle";
import { ProductImage } from "./ProductImage";
import { ProductButtons } from "./ProductButtons";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: CSSProperties;
  onChange?: () => void;
}

export const ProductCard = ({ children, product, className, style, onChange }: Props) => {
  const { counter, increaseBy } = useProduct(onChange);

  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
      }}
    >
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children}
      </div>
    </Provider>
  );
};

ProductCard.Title = ProductTitle;
ProductCard.Image = ProductImage;
ProductCard.Buttons = ProductButtons;
