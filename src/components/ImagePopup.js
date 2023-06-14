const ImagePopup = ({ card, onClose }) => {
  return (
    <div className={`popup image-popup ${card.link ? "popup_opened" : ""}`}>
      <div className="image-popup__container">
        <button
          className="popup__close image-popup__close"
          type="button"
          onClick={onClose}
        />
        <img src={card.link} alt={card.name} className="image-popup__image" />
        <h2 className="image-popup__title">{card.name}</h2>
      </div>
    </div>
  );
};

export default ImagePopup;
