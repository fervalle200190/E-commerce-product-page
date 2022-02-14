import { useState } from "react";
import NavContainer from "./NavContainer";
import ProductContainer from "./ProductContainer";

function MainContainer({ handleShow }) {
     const [amount, setAmount] = useState(0);
     const [show, setShow] = useState(0);
     const [product, setProduct] = useState([]);

     const handleSell = (data)=> {
          setProduct(product => [...product, data])
     }
     return (
          <>
               <div className="main-container">
                    <NavContainer product={product} setProduct={setProduct} />
                    <ProductContainer
                         amounts={{ amount, setAmount }}
                         shows={{ show, setShow }}
                         handleSell={handleSell}
                         handleShow={handleShow}
                    />
               </div>
          </>
     );
}

export default MainContainer;
