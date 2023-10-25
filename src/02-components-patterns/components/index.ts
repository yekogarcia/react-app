import { ProductImage } from ".";
import { ProductButtons } from ".";
import { ProductTitle } from ".";
import { ProductCardHOCProps } from "../interfaces/interfaces";
import { ProductCard as ProductCardHOC  } from "./ProductCard";
export { ProductButtons } from "./ProductButtons";
// export { ProductCard } from "./ProductCard";
export { ProductImage } from "./ProductImage";
export { ProductTitle } from "./ProductTitle";

export const ProductCard: ProductCardHOCProps  = Object.assign(ProductCardHOC,{
    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProductButtons
});

export default ProductCard;