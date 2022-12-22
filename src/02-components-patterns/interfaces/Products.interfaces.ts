import { ProductCardProps } from "../components/ProductCard";
import { ProductImageProps } from "../components/ProductImage";
import { ProductTitleProps } from "../components/ProductTitle";
import { ProductsButtonsProps } from "../components/ProductsButtons";

export interface Product {
    id: string;
    title: string;
    img?: string;
}

export interface ProductCardContext {
    count : number;
    product : Product;
    increaseByOne : (val : number) => () => void;
}

export interface ProductCardHOCProps {
    ({ children, product }: ProductCardProps) : JSX.Element;
    Title: (Props : ProductTitleProps ) => JSX.Element;
    Image: ({ img, title }: ProductImageProps ) => JSX.Element;
    Buttons: ({ className } : ProductsButtonsProps) => JSX.Element;
}