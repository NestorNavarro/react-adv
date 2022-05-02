import { useContext } from "react";

import noImg from "../assets/no-image.jpg";
import { ProductContext } from "./ProductCard";

import styles from "../styles/styles.module.css";

export const ProductImage = ({ img = "", title = "" }) => {
    const { product } = useContext(ProductContext);

    let imgToShow = img ? img : product.img;

    let titleToShow =  title ? title : product.title ;

    return (
        <img 
            className={styles.productImg}
            src={imgToShow ? imgToShow : noImg}
            alt={titleToShow ? titleToShow : "No image"}
        />
    )
}

export default ProductImage