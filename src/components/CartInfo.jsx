import ItemImage from "../images/image-product-1-thumbnail.jpg";
import Delete from "../images/icon-delete.svg";

function CartInfo({ el, handleDelete }) {
     const toTrash = ()=> {
          handleDelete(el)
     }
     return (
          <>
               <div className="cart-info">
                    <div className="inner-cart-info">
                         <img src={ItemImage} alt={el.name} />
                    </div>
                    <div className="inner-cart-details">
                         <h6>{el.name}</h6>
                         <p>
                              {el.price} x {el.number}{" "}
                              <b>$
                                   {parseInt(
                                        el.price.slice(1, el.price.length)
                                   ) * parseInt(el.number)}
                                   .00
                              </b>
                         </p>
                    </div>
                    <div className="delete-container" onClick={toTrash}>
                        <img src={Delete} alt="borrar" />
                    </div>
               </div>
          </>
     );
}

export default CartInfo;
