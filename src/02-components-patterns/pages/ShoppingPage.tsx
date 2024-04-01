import { useState } from "react";
import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components";
import { Product } from "../interfaces/interfaces";

import "../styles/custom-styles.css";

const Product1 = {
  id: "1",
  title: "Coffe Mug",
  img: "./coffee-mug.png",
};
const Product2 = {
  id: "2",
  title: "Coffe Mug 2",
  img: "./coffee-mug2.png",
};

const products: Product[] = [Product1, Product2];

interface ProductInCart extends Product {
  count: number;
}

export const ShoppingPage = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductInCart;
  }>({});

  const onProductCountChange = () => {
    console.log("prod");
  };

  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            className="bg-dark text-white"
            onChange={() => onProductCountChange()}
          >
            <ProductImage className="custom-image" />
            <ProductTitle title={"Hola "} className="text-bold" />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>

      <div className="shopping-cart">
        <ProductCard
          product={Product2}
          className="bg-dark text-white"
          style={{ width: "100px" }}
          onChange={() => onProductCountChange()}
        >
          <ProductImage className="custom-image" />
          <ProductButtons className="custom-buttons" />
        </ProductCard>
      </div>
    </div>
  );
};
