import { createContext } from "react";

//Our imports
import useProduct from "../hooks/useProduct";
import { ProductCardContext, ProductCardProps } from "../interfaces/Products.interfaces";
import styles from "../styles/styles.module.css";

export const ProductContext = createContext({} as ProductCardContext);

const { Provider } = ProductContext;

const ProductCard = ({ children,  product } : ProductCardProps) => {

    const [ count, increaseByOne ] = useProduct();

  return (
    <Provider value={{
        count,
        product,
        increaseByOne,
    }}>
        <div className={styles.productCard}>
            {children}
        </div>
    </Provider>
  )
}


export default ProductCard