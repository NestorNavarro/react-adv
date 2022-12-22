import { useContext } from "react";

import noImg from "../assets/no-image.jpg";
import { ProductContext } from "./ProductCard";

import stylesCss from "../styles/styles.module.css";

export interface ProductImageProps {
    img ?: string;
    title ?: string;
    className ?: string;
    style ?: React.CSSProperties;
}

export const ProductImage = ({ img = "", title = "", className = "", style } : ProductImageProps) => {
    const { product } = useContext(ProductContext);

    let imgToShow = img ? img : product.img;

    let titleToShow =  title ? title : product.title ;

    return (
        <img 
            style={style}
            className={`${stylesCss.productImg} ${className}`}
            src={imgToShow ? imgToShow : noImg}
            alt={titleToShow ? titleToShow : "No image"}
        />
    )
}

export default ProductImage