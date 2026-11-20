import "../styles/ConfirmationModal.css";
function ConfirmationModal({
  title = "Confirm Action",
  message,
  confirmText = "confirm",
  cancleText = "cencle",
  onConfirm,
  onCancle,
}) {
  return (
    <div className="confirmation-overlay" onClick={oncancel}>
      <div
        className="confirmation-model"
        role="dialog"
        aria-modal="true"
        aria-labelledby="confirmation-title"
        onClick={(event) => event.stopPropagation()}
      >
        <h2 id="confirmation-title">{title}</h2>
        <p>{message}</p>

        <div className="confirmation-buttons">
          <button
            type="buttion"
            className="confirmation-cancle"
            onClick={onCancle}
          >
            {cancleText}
          </button>

          <button
            type="buttion"
            className="confirmation-delete"
            onClick={onConfirm}
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmationModal;
