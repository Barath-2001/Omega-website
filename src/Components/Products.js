import "../Styles/main.css"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { productData, responsive } from "./Data"; 
import ProductData from "./ProductData";
export default function Products(){
    const product = productData.map((item) => (
        <ProductData
            name={item.name}
            url={item.imageUrl}
            price={item.price}
            description={item.description}
        />
    ));    
    return(
        <div id="product">
            <div className="App" >
                <h2 style={{textAlign:"center"}}>Products</h2>
                <Carousel showDots={false} responsive={responsive}>
                    {product}
                </Carousel>
            </div>
        </div>
    );
};
