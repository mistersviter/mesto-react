import React from 'react';

function Main() {
  return (
    <main className="main">
      <section className="profile page__profile">
        <div className="profile__avatar-wrapper">
          <img src="#" alt="аватар" className="profile__avatar" />
          <button type="button" aria-label="Изменить аватар" className="profile__avatar-change-button"></button>
        </div>
        <div className="profile__info">
          <h1 className="profile__title"></h1>
          <button type="button" aria-label="Редактировать профиль" className="button profile__edit-profile-button"></button>
          <p className="profile__description"></p>        
        </div>
        <button type="button" aria-label="Добавить карточку" className="button profile__add-card-button"></button>
      </section>
      <section className="places page__places">
        <ul className="places__cards">
        </ul>
      </section>
    </main> 
  );
}

export default Main;