import Logo from "../images/logo.svg";
import Avatar from "../images/image-avatar.png";
import Cart from "../images/icon-cart.svg";
import Close from "../images/icon-close.svg";
import Menu from "../images/icon-menu.svg";
import CartInfo from "./CartInfo";
import { useRef, useState, useEffect } from "react";

function NavContainer({ product, setProduct }) {
     const menuOp = useRef();
     const menuSha = useRef();
     const cartShow = useRef();
     const [itemsTotal, setItemsTotal] = useState();
     const handleBtn = () => {
          menuOp.current.classList.remove("to-show");
          menuSha.current.classList.remove("to-shaw");
          document.querySelector("body").style.overflow = "auto";
     };
     const handleOpen = () => {
          menuOp.current.classList.add("to-show");
          menuSha.current.classList.add("to-shaw");
          document.querySelector("body").style.overflow = "hidden";
     };
     const handleShow = () => {
          cartShow.current.classList.toggle("cart-hand");
     };
     const handleDelete = (data) => {
          let newData = product.filter((el) => {
               return el.id !== data.id;
          });
          setProduct(newData);
     };
     useEffect(() => {
          if (product.length !== 0) {
               let sum = 0;
               for (let i = 0; i < product.length; i++) {
                    sum += product[i].number;
               }
               setItemsTotal(sum);
          }
     }, [product]);
     return (
          <>
               <div className="center-nav">
                    <nav className="nav-container">
                         <div className="inner-nav">
                              <img
                                   src={Menu}
                                   alt="menu-button"
                                   onClick={handleOpen}
                                   className="menu-btn mobile"
                              />
                              <img src={Logo} alt="logo" className="logo" />
                              <div className="shadow-container" ref={menuSha}>
                                   <ul className="ul-container" ref={menuOp}>
                                        <li className="li-container mobile">
                                             <img
                                                  src={Close}
                                                  alt="close-button"
                                                  onClick={handleBtn}
                                             />
                                        </li>
                                        <li className="li-container">
                                             <a
                                                  href="https://www.google.com/?hl=es"
                                                  className="nav-a"
                                             >
                                                  Collections
                                             </a>
                                             <div className="yellow-underline"></div>
                                        </li>
                                        <li className="li-container">
                                             <a
                                                  href="https://www.google.com/?hl=es"
                                                  className="nav-a"
                                             >
                                                  Men
                                             </a>
                                             <div className="yellow-underline"></div>
                                        </li>
                                        <li className="li-container">
                                             <a
                                                  href="https://www.google.com/?hl=es"
                                                  className="nav-a"
                                             >
                                                  Women
                                             </a>
                                             <div className="yellow-underline"></div>
                                        </li>
                                        <li className="li-container">
                                             <a
                                                  href="https://www.google.com/?hl=es"
                                                  className="nav-a"
                                             >
                                                  About
                                             </a>
                                             <div className="yellow-underline"></div>
                                        </li>
                                        <li className="li-container">
                                             <a
                                                  href="https://www.google.com/?hl=es"
                                                  className="nav-a"
                                             >
                                                  Contact
                                             </a>
                                             <div className="yellow-underline"></div>
                                        </li>
                                   </ul>
                              </div>
                         </div>
                         <div className="inner-nav-two">
                              <div className="cart">
                                   <div
                                        className="cart-img-container"
                                        onClick={handleShow}
                                   >
                                        {product.length !== 0 && (
                                             <div className="amount-items">
                                                  {itemsTotal}
                                             </div>
                                        )}
                                        <img
                                             src={Cart}
                                             alt="cart"
                                             className="cart-image"
                                        />
                                   </div>
                              </div>
                              <div className="show-cart" ref={cartShow}>
                                   <div className="flex-cart">
                                        <div className="cart-title-container">
                                             <h4 className="cart-title">
                                                  Cart
                                             </h4>
                                        </div>
                                        <div className="inner-show-cart">
                                             {product.length !== 0 ? (
                                                  product.map((el, index) => {
                                                       return (
                                                            <CartInfo
                                                                 key={index}
                                                                 el={el}
                                                                 handleDelete={
                                                                      handleDelete
                                                                 }
                                                            />
                                                       );
                                                  })
                                             ) : (
                                                  <h5 className="empty-text">
                                                       Your cart is empty.
                                                  </h5>
                                             )}
                                             {product.length !== 0 && (
                                                  <button className="check-btn">
                                                       Checkout
                                                  </button>
                                             )}
                                        </div>
                                   </div>
                              </div>
                              <div className="avatar">
                                   <div className="avatar-img-container">
                                        <img
                                             src={Avatar}
                                             alt="avatar"
                                             className="avatar-image"
                                        />
                                   </div>
                              </div>
                         </div>
                    </nav>
               </div>
          </>
     );
}

export default NavContainer;
