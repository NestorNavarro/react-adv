import { useContext } from "react";

import { ProductContext } from "./ProductCard";

import styles from "../styles/styles.module.css";

export interface ProductsButtonsProps {
    className ?: string;
    style ?: React.CSSProperties;
}

export const ProductsButtons = ({ className, style } : ProductsButtonsProps ) =>  {

    const { increaseByOne, count } = useContext(ProductContext);

    return (
        <div className={`${styles.buttonsContainer} ${className}`} style={style}>
            <button 
                className={styles.buttonMinus} 
                onClick={increaseByOne(-1)}
            >
                    -
                </button>
            <div className={styles.countLabel} >{count}</div>
            <button
                className={styles.buttonAdd}
                onClick={increaseByOne(1)}
             >
                 +
            </button>
        </div>
    );
}

export default ProductsButtons;