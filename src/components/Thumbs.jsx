function Thumbs({ thumb, number, setShow }) {
     const handleShow = () => {
          setShow(number);
     };
     return (
          <>
               <div
                    className={`thumb-container cont-thumb-${number} desktop`}
                    onClick={handleShow}
               >
                    <label>
                         <input
                              type="radio"
                              name="images"
                              className={`image-selector image-selector-${number}`}
                              defaultChecked={number === 0 ? true : false}
                         />
                         <div className="outline-yellow"></div>
                         <img
                              src={thumb}
                              alt="thumb"
                              className={`image-${number}`}
                         />
                    </label>
               </div>
          </>
     );
}

export default Thumbs;
