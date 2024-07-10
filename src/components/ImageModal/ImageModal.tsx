import Modal from "react-modal";
import css from "./ImageModal.module.css";
import { iImageModal } from "./ImageModal.types";

export default function ImageModal({
  isOpen,
  onClose,
  url,
  description,
}: iImageModal) {
  return (
    <Modal
      className={css.modal}
      isOpen={isOpen}
      overlayClassName={css.overlayModal}
      ariaHideApp={false}
      onRequestClose={onClose}
      shouldCloseOnEsc={true}
    >
      <img className={css.imgModal} src={url} alt={description} />
    </Modal>
  );
}
