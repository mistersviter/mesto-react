import React from "react";

function Card(props) {
  return (
    <li className="card">
      <img src={props.card.link} alt={props.card.name} className="card__image" />
      <div className="card__info">
        <h2 className="card__title">{props.card.name}</h2>
        <div className="card__like-container">
          <button type="button" aria-label="Лайк" className="card__like-button"></button>
          <span className="card__like-counter">{props.card.likes.length}</span>
        </div>
      </div>
      <button type="button" aria-label="Удалить карточку" className="card__delete-button"></button>
    </li>
  )
}

export default Card;