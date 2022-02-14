import Cart from "../images/icon-cart.svg";
import Plus from "../images/icon-plus.svg";
import Minus from "../images/icon-minus.svg";

function ProductDetails({ amounts, handleSell }) {
     const { amount, setAmount } = amounts;
     const handleRest = () => {
          if (amount === "") {
               setAmount(0);
               return;
          }
          if (amount <= 0) {
               return;
          }
          setAmount(parseInt(amount) - 1);
     };
     const handlePlus = () => {
          if (amount === "") {
               setAmount(0);
               return;
          }
          if (amount >= 99) {
               return;
          }
          setAmount(parseInt(amount) + 1);
     };
     const handleBuy = () => {
          if (amount === 0) {
               return;
          }
          const item = {
               id: Date.now(),
               name: "Autumn Limited Edition...",
               price: "$125.00",
               number: parseInt(amount),
          };
          handleSell(item);
     };
     const handleInput = (e) => {
          if (e.target.value.length > e.target.maxLength) {
               setAmount(e.target.value.slice(0, e.target.maxLength));
          } else {
               setAmount(e.target.value);
          }
     };
     return (
          <>
               <article className="product-details">
                    <span className="yellow-mini-title">sneaker company</span>
                    <h2 className="main-title">
                         Fall Limited Edition Sneakers
                    </h2>
                    <p className="details-info">
                         These low-profile sneakers are your perfect casual wear
                         companion. Featuring a durable rubber outer sole,
                         they'll withstand everything the weather can offer.
                    </p>
                    <div className="prices">
                         <div className="price-container">
                              <h4 className="price">$125.00</h4>
                              <mark className="discount">50%</mark>
                         </div>
                         <del className="old-price">$250.00</del>
                    </div>
                    <div className="amount-buy-section">
                         <div className="amount-container">
                              <button
                                   onClick={handleRest}
                                   className="minus-btn"
                              >
                                   <img src={Minus} alt="icon-minus" />{" "}
                              </button>
                              <input
                                   type="number"
                                   maxLength={2}
                                   value={amount}
                                   onChange={(e) => handleInput(e)}
                              />
                              <button onClick={handlePlus} className="plus-btn">
                                   <img src={Plus} alt="icon-plus" />{" "}
                              </button>
                         </div>
                         <div className="add-cart-btn-container">
                              <button className="add-cart" onClick={handleBuy}>
                                   <img src={Cart} alt="cart" /> Add to cart
                              </button>
                         </div>
                    </div>
               </article>
          </>
     );
}

export default ProductDetails;
