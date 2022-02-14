import MainContainer from "./MainContainer";
import Modal from "./Modal";

function ChangerContainer() {
     const handleShow = ()=> {
          document.querySelector(".show-image-cleaner").classList.add("fade-absolute")
          document.querySelector("body").style.overflow = "hidden"
     }
     return (
          <>
               <div className="changer-container">
                    <MainContainer handleShow={handleShow} />
                    <Modal />
               </div>
          </>
     );
}

export default ChangerContainer;
