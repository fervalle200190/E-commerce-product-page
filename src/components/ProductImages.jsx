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
import Thumbs from "./Thumbs";
import { useRef, useEffect } from "react";

function ProductImages({ shows, handleShow }) {
     const images = [ProductOne, ProductTwo, ProductThree, ProductFour];
     const thumb = [ThumbOne, ThumbTwo, ThumbThree, ThumbFour];
     const { show, setShow } = shows;
     const mainImage = useRef();
     const handleChange = ()=> {
          mainImage.current.classList.add("to-change");
          setTimeout(() => {
               mainImage.current.classList.remove("to-change");
          }, 300);
     }
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
     const handleAbsolute = ()=> {
          handleShow()
     }
     useEffect(() => {
          console.log(show)
     }, [show]);
     return (
          <>
               <div className="main-images-container">
                    <div className="big-image" onClick={handleAbsolute}>
                         <img
                              src={images[show]}
                              alt="referencial product images"
                              className="big-image-ref"
                              ref={mainImage}
                              onLoad={handleChange}
                         />
                         <div className="arrows-container">
                              <div className="arrow-cont" onClick={handlePrev}>
                                   <img src={Previous} alt="previous-arrow" />
                              </div>
                              <div className="arrow-cont" onClick={handleNext}>
                                   <img src={Next} alt="next-icon" />
                              </div>
                         </div>
                    </div>
                    <div className="thumbs-container desktop">
                         {thumb.map((el, index) => (
                              <Thumbs
                                   key={index}
                                   thumb={el}
                                   number={index}
                                   setShow={setShow}
                              />
                         ))}
                    </div>
               </div>
          </>
     );
}

export default ProductImages;
