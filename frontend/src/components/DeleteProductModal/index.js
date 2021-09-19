import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import DeleteButton from './DeleteButton';

function DeleteButtonModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Delete Product</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <DeleteButton />
        </Modal>
      )}
    </>
  );
}

export default DeleteButtonModal;
