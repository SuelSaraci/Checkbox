import React, { useState } from "react";
import Modal from "../Modal";
import '../components/ProductResults.css'

function ProductResults() {
    const [modalOpen, setModalOpen] = useState(false);
    return (
        <div className="ProductResults">
             
     <center>
      <button className="openModalBtn btn"
        onClick={() => {
          setModalOpen(true);
        }}
      > 
        Continue
        </button>
      {modalOpen && <Modal setOpenModal={setModalOpen} />}
      </center>
        </div>
    )
}

export default ProductResults




