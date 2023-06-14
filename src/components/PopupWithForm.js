import React from "react";

const PopupWithForm = ({
  name,
  title,
  buttonText,
  children,
  isOpen,
  onClose,
  onSubmit,
  buttonDisabled,
}) => {
  return (
    <div className={`popup popup_${name} ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <button onClick={onClose} className="popup__close" type="button" />
        <h2 className="popup__title">{title}</h2>
        <form
          className="popup__form"
          name={name}
          noValidate
          onSubmit={onSubmit}
        >
          {children}
          <button
            className={`popup__button ${
              buttonDisabled ? "popup__button_disabled" : ""
            }`}
            type="submit"
            disabled={buttonDisabled}
          >
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PopupWithForm;
