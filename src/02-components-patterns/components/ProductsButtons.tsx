import { useContext } from "react";

import { ProductContext } from "./ProductCard";

import styles from "../styles/styles.module.css";

export const ProductsButtons = () =>  {

    const { increaseByOne, count } = useContext(ProductContext);

    return (
        <div className={styles.buttonsContainer}>
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