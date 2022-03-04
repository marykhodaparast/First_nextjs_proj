function Modal(props) {
  function cancelHandler() {
    props.onCancel();
  }
  function confirmHandler() {
    props.onConfirm();
  }
  return (
    <div className="modal">
      <div className="inner">
        <p>Are you sure?</p>
        <div>
          <button className="btn" onClick={confirmHandler}>
            Confirm
          </button>
          <button className="btn btn--alt" onClick={cancelHandler}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
export default Modal;
