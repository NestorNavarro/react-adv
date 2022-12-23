//constants
import { products } from "./ShoppingPage.constants";
//hooks
import useShoppingCart from "../../hooks/useShoppingCart";
//components
import { ProductCard } from "../../components";
import "../../styles/custome-styles.css"



const ShoppingPage = () => {
    const { shoppingCard, onProductCountChange } = useShoppingCart()

    const productsSelected = Object.values(shoppingCard).map(productSelected => productSelected);
    
    return (
        <div>
            <h1>ShoppingPage</h1>
            <hr />
            <div
                style={{
                    display: "flex",
                    flexDirection : "row",
                    flexWrap: "wrap",
                }}
            >
                {
                    products.map(product => (
                        <ProductCard 
                            key={product.id} 
                            product={product}
                            value={shoppingCard?.[product.id]?.count ?? 0}
                            className="bg-dark text-white"
                            onChange={onProductCountChange}
                        >
                            <ProductCard.Image  className="custom-image" style={{ boxShadow : "10px 10px 10px rgba(0, 0, 0, 0.2)" }} />
                            <ProductCard.Title className="text-bold" />
                            <ProductCard.Buttons className="custom-btns" />
                        </ProductCard>
                    ))
                }
            </div>
            <div className="shopping-card ">
                {
                    productsSelected.map(({ count, ...product }) => (
                        <ProductCard 
                            key={`shoppingCard-${product.id}`}
                            value={count}
                            product={product} 
                            style={{ width : "100px" }}
                            className="bg-dark text-white"
                            onChange={onProductCountChange}
                        >
                            <ProductCard.Image  className="custom-image" style={{ boxShadow : "10px 10px 10px rgba(0, 0, 0, 0.2)" }} />
                            <ProductCard.Buttons 
                                className="custom-btns" 
                                style={{
                                    display : "flex",
                                    justifyContent : "center",
                                }}
                            />
                        </ProductCard>
                    ))
                }
            </div>
        </div>
    );
}

export default ShoppingPage