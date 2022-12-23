import { createContext, ReactElement } from "react";

//Our imports
import useProduct from "../hooks/useProduct";
import { onChangeArgs, Product, ProductCardContext } from "../interfaces/Products.interfaces";
import stylesCss from "../styles/styles.module.css";

export const ProductContext = createContext({} as ProductCardContext);

export interface ProductCardProps {
  value ?: number;
  product: Product;
  className ?: string;
  onChange ?: (args : onChangeArgs ) => void;
  style ?: React.CSSProperties;
  children?: ReactElement | ReactElement[];
}

const { Provider } = ProductContext;

const ProductCard = ({ 
  style,
  value,
  product, 
  children,
  onChange,
  className, 
} : ProductCardProps) => {

  const [ count, increaseByOne ] = useProduct({ onChange, product, value });

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