import ProductDetails from "./ProductDetails";
import ProductImages from "./ProductImages";

function ProductContainer({ amounts, shows, handleSell, handleShow }) {
     return (
          <>
               <div className="product-container">
                    <div className="product-container-align">
                         <ProductImages shows={shows} handleShow={handleShow} />
                         <ProductDetails
                              amounts={amounts}
                              handleSell={handleSell}
                         />
                    </div>
               </div>
          </>
     );
}

export default ProductContainer;
