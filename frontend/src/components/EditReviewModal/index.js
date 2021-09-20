import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditReviewForm from './EditReviewButton';

function EditReviewFormModal(props) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Edit your Review!</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditReviewForm reviewId={props.reviewId}/>
        </Modal>
      )}
    </>
  );
}

export default EditReviewFormModal;
