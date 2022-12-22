import { useContext } from 'react';

import { ProductContext } from './ProductCard';
import styles from "../styles/styles.module.css";

export interface ProductTitleProps {
    title ?: string;
    className ?: string;
    style ?: React.CSSProperties;
}

export const ProductTitle = ({ title, className, style } : ProductTitleProps) => {
    const { product } = useContext(ProductContext);

    let titleToShow =  title ? title : product.title;

    return (
        <span 
            className={`${styles.productDescription} ${className}`}
            style={style}
        >
            {titleToShow}
        </span>
    );
}
export default ProductTitle