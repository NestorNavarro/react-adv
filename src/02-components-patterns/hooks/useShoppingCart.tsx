import { useState } from "react";
// interface
import { Product, ProductInCart } from "../interfaces/Products.interfaces";

const useShoppingCart = () => {
    const [shoppingCard, setShoppingCard] = useState<{ [key : string] : ProductInCart }>({});
    
    const onProductCountChange = ({ count, product } : { count : number, product : Product}) => {
        setShoppingCard(prev => {
            if (count === 0) {
                const { [product.id] : toDelete, ...rest } = prev;
                return rest;
            }

            return { ...prev, [product.id] : { ...product, count } };
        })
    }

    return { shoppingCard, onProductCountChange };
};

export default useShoppingCart