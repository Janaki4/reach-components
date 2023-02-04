import ReactDOM from "react-dom";
import { useEffect } from "react";

function Modal({ children, onClose, actionBar }) {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);
  return ReactDOM.createPortal(
    <div>
      <div
        className="fixed inset-0 bg-gray-200 opacity-70"
        onClick={onClose}
      ></div>
      <div className="bg-white fixed inset-40 p-10  flex flex-col justify-between">
        {children}
        <div className="flex justify-end">{actionBar}</div>
      </div>
    </div>,
    document.querySelector(".modal-container")
  );
}

export default Modal;
