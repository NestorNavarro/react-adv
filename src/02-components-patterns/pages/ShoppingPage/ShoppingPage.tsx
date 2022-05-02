
import {
    ProductCard,
    ProductImage,
    ProductTitle,
    ProductsButtons,
} from "../../components";

const product = {
    id: "1",
    title: "Coffee Mug",
    // img: "./coffee-mug.png", 
}

const ShoppingPage = () => {
  return (
      <div>
        <h1>ShoppingPage</h1>
        <hr />

        <div
            style={{
                display: "flex",
                flexWrap: "wrap",
            }}
        >
            <ProductCard product={product}>
                <ProductCard.Image  />
                <ProductCard.Title />
                <ProductCard.Buttons />
            </ProductCard>
            
            <ProductCard product={product}>
                <ProductImage img="./coffee-mug.png"  />
                <ProductTitle title="Cafe"/>
                <ProductsButtons />
            </ProductCard>
        </div>

      </div>
  )
}

export default ShoppingPage