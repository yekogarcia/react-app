import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components";

import "../styles/custom-styles.css";

const Product = {
  id: "1",
  title: "Coffe Mug",
  img: "./coffee-mug.png",
};
export const ShoppingPage = () => {
  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        <ProductCard product={Product} className="bg-dark text-white">
          <ProductCard.Image className="custom-image" />
          <ProductCard.Title className="text-bold" />
          <ProductCard.Buttons className="custom-buttons" />
        </ProductCard>

        <ProductCard product={Product} className="bg-dark text-white">
          <ProductImage className="custom-image" />
          <ProductTitle title={"Hola "} className="text-bold" />
          <ProductButtons className="custom-buttons" />
        </ProductCard>

        <ProductCard product={Product} style={{ backgroundColor: "#70D1F8" }}>
          <ProductImage style={{boxShadow: "10px 10px 10px rgba(0,0,0,0.2)"}}/>
          <ProductTitle title={"Hola "} style={{ fontWeight: "bold"}} />
          <ProductButtons style={{display: "flex", justifyContent: "end"}} />
        </ProductCard>
      </div>
    </div>
  );
};
