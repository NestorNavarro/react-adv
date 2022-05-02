import { ReactElement } from "react";

export interface ProductCardProps {
    product: Product
    children?: ReactElement | ReactElement[]
}


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
    Title: ({ title }: {  title?: string }) => JSX.Element;
    Image: ({ img, title }: { img?: string, title?: string  }) => JSX.Element;
    Buttons: () => JSX.Element;
}