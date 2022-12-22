import { createContext, ReactElement } from "react";

//Our imports
import useProduct from "../hooks/useProduct";
import { Product, ProductCardContext } from "../interfaces/Products.interfaces";
import stylesCss from "../styles/styles.module.css";

export const ProductContext = createContext({} as ProductCardContext);

export interface ProductCardProps {
  product: Product;
  className ?: string;
  children?: ReactElement | ReactElement[];
  style ?: React.CSSProperties;
}

const { Provider } = ProductContext;

const ProductCard = ({ children,  product, className, style } : ProductCardProps) => {

  const [ count, increaseByOne ] = useProduct();

  return (
    <Provider value={{
        count,
        product,
        increaseByOne,
    }}>
        <div className={`${stylesCss.productCard} ${className}`} style={style}>
            {children}
        </div>
    </Provider>
  )
}


export default ProductCard