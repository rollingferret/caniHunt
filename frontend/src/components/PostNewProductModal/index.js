import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import NewProductForm from './postnewproduct';

function NewProductFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Post Product</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <NewProductForm />
        </Modal>
      )}
    </>
  );
}

export default NewProductFormModal;
