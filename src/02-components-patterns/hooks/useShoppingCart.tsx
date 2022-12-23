import { useState } from "react";
// interface
import { Product, ProductInCart } from "../interfaces/Products.interfaces";

const useShoppingCart = () => {
    const [shoppingCard, setShoppingCard] = useState<{ [key : string] : ProductInCart }>({});
    
    const onProductCountChange = ({ count, product } : { count : number, product : Product}) => {
        setShoppingCard(prev => {
            const productInCart : ProductInCart = prev[product.id] || { ...product, count : 0 };

            if (Math.max(productInCart.count + count, 0) > 0) {
                productInCart.count += count;
                return { ...prev, [product.id] : productInCart }
            }

            const { [product.id] : toDelete, ...rest } = prev;
            return { ...rest };
        })
    }

    return { shoppingCard, onProductCountChange };
};

export default useShoppingCart