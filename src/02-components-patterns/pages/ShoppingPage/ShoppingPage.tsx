//constants
import { products } from "./ShoppingPage.constants";
//components
import { ProductCard } from "../../components";
import "../../styles/custome-styles.css"

const product = products[0];

const ShoppingPage = () => {
    return (
        <div>
            <h1>ShoppingPage</h1>
            <hr />
            <ProductCard 
                key={product.id} 
                product={product}
                initialValues={{
                    count : 4,
                    maxCount : 10,
                }}
            >
                {
                    ({ 
                        reset, 
                        count, 
                        increaseBy, 
                        isMaxCountReached 
                    }) => (
                        <>
                            <ProductCard.Image />
                            <ProductCard.Title />
                            <ProductCard.Buttons />
                        </>
                    )
                }
            </ProductCard>
        </div>
    );
}

export default ShoppingPage