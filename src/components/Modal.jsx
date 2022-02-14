import ProductOne from "../images/image-product-1.jpg";
import ProductTwo from "../images/image-product-2.jpg";
import ProductThree from "../images/image-product-3.jpg";
import ProductFour from "../images/image-product-4.jpg";
import ThumbOne from "../images/image-product-1-thumbnail.jpg";
import ThumbTwo from "../images/image-product-2-thumbnail.jpg";
import ThumbThree from "../images/image-product-3-thumbnail.jpg";
import ThumbFour from "../images/image-product-4-thumbnail.jpg";
import Next from "../images/icon-next.svg";
import Previous from "../images/icon-previous.svg";
import Close from "../images/icon-close.svg";
import ThumbModal from "./ThumbModal";
import { useState, useRef, useEffect } from "react";

function Modal() {
     const images = [ProductOne, ProductTwo, ProductThree, ProductFour];
     const thumb = [ThumbOne, ThumbTwo, ThumbThree, ThumbFour];
     const [show, setShow] = useState(0);
     const closeAb = useRef();
     const handleClose = () => {
          closeAb.current.classList.remove("fade-absolute");
          document.querySelector("body").style.overflow = "visible";
     };
     const handleNext = () => {
          if (show >= 3) {
               setShow(0);
          } else {
               setShow(show + 1);
          }
     };
     const handlePrev = () => {
          if (show <= 0) {
               setShow(3);
          } else {
               setShow(show - 1);
          }
     };
     useEffect(() => {
          document.querySelectorAll(".input-modal-absolute").forEach((thumbl) => {
               thumbl.checked = false;
          });
          document.querySelectorAll(".input-modal-absolute")[show].checked = true;
     }, [show]);
     return (
          <>
               <div className="show-image-cleaner" ref={closeAb}>
                    <div className="close-container">
                         <div className="close-image-container">
                              <img
                                   src={Close}
                                   alt="close"
                                   onClick={handleClose}
                              />
                         </div>
                         <div className="images-container-absolute">
                              <div className="big-image-absolute">
                                   <img src={images[show]} alt="referencial" />
                                   <div className="arrow-absolute-container">
                                        <div
                                             className="arrow-absolute-solo"
                                             onClick={handlePrev}
                                        >
                                             <img
                                                  src={Previous}
                                                  alt="btn backwards"
                                             />
                                        </div>
                                        <div
                                             className="arrow-absolute-solo"
                                             onClick={handleNext}
                                        >
                                             <img
                                                  src={Next}
                                                  alt="btn forwards"
                                             />
                                        </div>
                                   </div>
                              </div>
                              <div className="thumb-absolute-container">
                                   {thumb.map((el, index) => (
                                        <ThumbModal
                                             key={index}
                                             image={el}
                                             show={setShow}
                                             number={index}
                                        />
                                   ))}
                              </div>
                         </div>
                    </div>
               </div>
          </>
     );
}

export default Modal;
