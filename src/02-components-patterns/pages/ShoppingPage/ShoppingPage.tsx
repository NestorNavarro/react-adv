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
                className="bg-dark text-white"
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
                            <ProductCard.Image  className="custom-image" style={{ boxShadow : "10px 10px 10px rgba(0, 0, 0, 0.2)" }} />
                            <ProductCard.Title className="text-bold" />
                            <ProductCard.Buttons className="custom-btns" />
                            <button onClick={reset}>Reset</button>
                            <button onClick={increaseBy(-2)}>-2</button>
                            {
                                ( !isMaxCountReached && <button onClick={increaseBy(2)}>+2</button> )
                            }
                            <span>{count}</span>
                        </>
                    )
                }
            </ProductCard>
        </div>
    );
}

export default ShoppingPage