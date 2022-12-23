import { useCallback, useContext } from "react";

import { ProductContext } from "./ProductCard";

import styles from "../styles/styles.module.css";

export interface ProductsButtonsProps {
    className ?: string;
    style ?: React.CSSProperties;
}

export const ProductsButtons = ({ className, style } : ProductsButtonsProps ) =>  {
    const { increaseBy, count, maxCount } = useContext(ProductContext);

    const isMaxReached = useCallback(
      () => !!maxCount && count === maxCount,
      [maxCount, count],
    )

    return (
        <div className={`${styles.buttonsContainer} ${className}`} style={style}>
            <button 
                className={styles.buttonMinus} 
                onClick={increaseBy(-1)}
            >
                    -
                </button>
            <div className={styles.countLabel} >{count}</div>
            <button
                className={`${styles.buttonAdd} ${isMaxReached() && styles.disabled}`}
                onClick={!isMaxReached() ? increaseBy(1) : undefined}
             >
                 +
            </button>
        </div>
    );
}

export default ProductsButtons;