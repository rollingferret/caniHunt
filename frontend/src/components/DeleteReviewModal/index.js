import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import DeleteReviewForm from './DeleteReviewButton';

function DeleteReviewModal(props) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Delete your Review!</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <DeleteReviewForm reviewId={props.reviewId}/>
        </Modal>
      )}
    </>
  );
}

export default DeleteReviewModal;
