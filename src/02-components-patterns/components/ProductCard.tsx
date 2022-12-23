import { createContext } from "react";

//Our imports
import useProduct from "../hooks/useProduct";
import { InitialValues, onChangeArgs, Product, ProductCardContext, ProductCardHandlers } from "../interfaces/Products.interfaces";
import stylesCss from "../styles/styles.module.css";

export const ProductContext = createContext({} as ProductCardContext);
export interface ProductCardProps {
  value ?: number;
  product: Product;
  className ?: string;
  style ?: React.CSSProperties;
  onChange ?: (args : onChangeArgs ) => void;
  children: (args : ProductCardHandlers) => JSX.Element;
  initialValues ?: InitialValues;
}

const { Provider } = ProductContext;

const ProductCard = ({ 
  style,
  value,
  product, 
  children,
  onChange,
  className, 
  initialValues,
} : ProductCardProps) => {

  const { count, increaseBy, maxCount, isMaxCountReached, reset } = useProduct({ onChange, product, value, initialValues });

  return (
    <Provider value={{
        count,
        product,
        maxCount,
        increaseBy,
    }}>
        <div className={`${stylesCss.productCard} ${className}`} style={style}>
            {
              children({
                count,
                product,
                maxCount,
                isMaxCountReached,

                increaseBy,
                reset,
              })
            }
        </div>
    </Provider>
  )
}


export default ProductCard