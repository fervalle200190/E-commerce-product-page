function ThumbModal({ image, show, number }) {
     const handleChange = () => {
          show(number);
     };
     return (
          <>
               <div
                    className="thumbs-absolute-container"
                    onClick={handleChange}
               >
                    <label>
                         <input
                              type="radio"
                              name="images-absolute"
                              className={`input-modal-absolute`}
                              defaultChecked={number === 0 && true}
                         />
                         <div className="absolute-op"></div>
                         <img src={image} alt="thumbnail" />
                    </label>
               </div>
          </>
     );
}

export default ThumbModal;
