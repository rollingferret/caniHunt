import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import NewReviewForm from './CreateReviewButton';

function NewProductFormModal(props) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Post a Review!</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <NewReviewForm productId={props.productId}/>
        </Modal>
      )}
    </>
  );
}

export default NewProductFormModal;
