import Modal from "react-modal";
Modal.setAppElement("#root");

const ImageModal = ({ modalIsOpen, closeModal, url }) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      shouldCloseOnEsc={true}
    >
      <img src={url} />
    </Modal>
  );
};

export default ImageModal;
