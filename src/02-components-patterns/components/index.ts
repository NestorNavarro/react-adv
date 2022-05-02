import ProductTitle    from "./ProductTitle";
import ProductImage    from "./ProductImage";
import ProductsButtons from "./ProductsButtons";
import ProductCardHOC  from './ProductCard';

import { ProductCardHOCProps } from "../interfaces/Products.interfaces";

export { ProductImage     } from './ProductImage';
export { ProductTitle     } from './ProductTitle';
export { ProductsButtons  } from './ProductsButtons';


export const ProductCard : ProductCardHOCProps = Object.assign(ProductCardHOC, {
    Title   : ProductTitle,
    Image   : ProductImage,
    Buttons : ProductsButtons
});

export default ProductCard;