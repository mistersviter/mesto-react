import React from 'react';

function ImagePopup() {
  return (
    <div className="popup popup_type_zoom">
        <div className="popup__zoom-container">
          <figure className="popup__zoom-figure">
            <img src="#" className="popup__zoom-image" alt="" />
            <figcaption className="popup__zoom-caption"></figcaption>
          </figure>
          <button type="button" className="popup__close-button"></button>
        </div>
    </div>
  );
}

export default ImagePopup;