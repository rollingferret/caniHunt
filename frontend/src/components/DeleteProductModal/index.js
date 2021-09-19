import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import DeleteButton from './DeleteButton';

function DeleteButtonModal(props) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Delete Product</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <DeleteButton productId={props.productId}/>
        </Modal>
      )}
    </>
  );
}

export default DeleteButtonModal;
