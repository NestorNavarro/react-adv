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
    maxCount ?: number;
    increaseBy : (val : number) => () => void;
}

export interface onChangeArgs {
    count : number;
    product : Product;
}
export interface ProductInCart extends Product {
    count : number;
}  
export interface ProductCardHOCProps {
    ({ children, product }: ProductCardProps) : JSX.Element;
    Title: (Props : ProductTitleProps ) => JSX.Element;
    Image: ({ img, title }: ProductImageProps ) => JSX.Element;
    Buttons: ({ className } : ProductsButtonsProps) => JSX.Element;
}

export interface InitialValues {
    count ?: number;
    maxCount ?: number; 
}

export interface ProductCardHandlers {
    count : number;
    isMaxCountReached : boolean;
    maxCount ?: number;
    product : Product;

    increaseBy : (value : number) => () => void;
    reset : () => void; 
}