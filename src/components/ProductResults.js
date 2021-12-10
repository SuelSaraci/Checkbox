import React, { useState } from "react";
import Modal from "../Modal";
import '../components/ProductResults.css'

function ProductResults() {
    const [modalOpen, setModalOpen] = useState(false);
    return (
        <div className="ProductResults">
             
     
      <button className="openModalBtn btn"
        onClick={() => {
          setModalOpen(true);
        }}
      > 
        Continue
        </button>
      {modalOpen && <Modal setOpenModal={setModalOpen} />}
        </div>
    )
}

export default ProductResults




