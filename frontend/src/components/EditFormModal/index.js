import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditForm from './EditForm';

function EditFormModal(props) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Edit Product</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditForm productId={props.productId}/>
        </Modal>
      )}
    </>
  );
}

export default EditFormModal;
