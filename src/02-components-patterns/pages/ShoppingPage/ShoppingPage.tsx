
import {
    ProductCard,
    ProductImage,
    ProductTitle,
    ProductsButtons,
} from "../../components";

import "../../styles/custome-styles.css"

const product = {
    id: "1",
    title: "Coffee Mug",
    img: "./coffee-mug.png", 
}

const ShoppingPage = () => {
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
            <ProductCard product={product} className="bg-dark text-white">
                <ProductCard.Image  className="custom-image" style={{ boxShadow : "10px 10px 10px rgba(0, 0, 0, 0.2)" }} />
                <ProductCard.Title className="text-bold" />
                <ProductCard.Buttons className="custom-btns" />
            </ProductCard>
            
            <ProductCard className="bg-dark text-white" product={product}>
                <ProductImage className="custom-image" />
                <ProductTitle className="text-bold" title="Cafe" />
                <ProductsButtons className="custom-btns" />
            </ProductCard>

            <ProductCard  product={product} style={{ backgroundColor : "bisque" }}>
                <ProductImage style={{ boxShadow : "10px 10px 10px rgba(0, 0, 0, 0.2)" }}/>
                <ProductTitle title="Cafe" style={{ color : "gray", fontWeight : "bold" }} />
                <ProductsButtons style={{ display : "flex", justifyContent : "end"}}/>
            </ProductCard>
        </div>

      </div>
  )
}

export default ShoppingPage