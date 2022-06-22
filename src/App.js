import logo from './images/logo.svg';
import './index.css';

function App() {
  return (
    <div className="page">
      <header className="header page__header">
        <img src={logo} alt="лого" className="logo"/>
      </header> 
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
      <footer className="footer">
        <p className="footer__copyright">© 2022 Mesto Russia</p>
      </footer>
      <div className="popup popup_type_change-avatar">
        <div className="popup__container">
          <button type="button" aria-label="Закрыть" className="popup__close-button"></button>
          <h2 className="popup__caption">Обновить аватар</h2>
          <form id="changeAvatarForm" className="popup__form" name="changeAvatarForm">        
            <label className="popup__form-field">
              <input id="avatar-image-input" type="url" className="popup__input popup__input_type_avatar-image" name="avatar" placeholder="Ссылка на картинку" required />
              <span className="popup__input-error avatar-image-input-error"></span>
            </label>
            <button type="submit" className="popup__submit-button popup__submit-button_inactive" disabled>Сохранить</button>
          </form>
        </div>  
      </div>
      <div className="popup popup_type_edit-profile">
        <div className="popup__container">
          <button type="button" aria-label="Закрыть" className="popup__close-button"></button>
          <h2 className="popup__caption">Редактировать профиль</h2>
          <form id="editProfileForm" className="popup__form" name="editProfileForm">
            <label className="popup__form-field">
              <input id="name-input" type="text" className="popup__input popup__input_type_name" name="name" placeholder="Имя" minLength="2" maxLength="40" required />
              <span className="popup__input-error name-input-error"></span>
            </label>
            <label className="popup__form-field">
              <input id="description-input" type="text" className="popup__input popup__input_type_description" name="about" placeholder="О себе" minLength="2" maxLength="200" required />
              <span className="popup__input-error description-input-error"></span>
            </label>
            <button type="submit" className="popup__submit-button">Сохранить</button>
          </form>
        </div>  
      </div>
      <div className="popup popup_type_add-card">
        <div className="popup__container">
          <button type="button" aria-label="Закрыть" className="popup__close-button"></button>
          <h2 className="popup__caption">Новое место</h2>
          <form id="addCardForm" className="popup__form" name="addCardForm">
            <label className="popup__form-field">
              <input id="card-title-input" type="text" className="popup__input popup__input_type_card-title" name="name" placeholder="Название" minLength="2" maxLength="30" required />
              <span className="popup__input-error card-title-input-error"></span>
            </label>
            <label className="popup__form-field">
              <input id="card-image-input" type="url" className="popup__input popup__input_type_card-image" name="link" placeholder="Ссылка на картинку" required />
              <span className="popup__input-error card-image-input-error"></span>
            </label>
            <button type="submit" className="popup__submit-button popup__submit-button_inactive" disabled>Создать</button>
          </form>
        </div>  
      </div>
      <div className="popup popup_type_zoom">
        <div className="popup__zoom-container">
          <figure className="popup__zoom-figure">
            <img src="#" className="popup__zoom-image" alt="" />
            <figcaption className="popup__zoom-caption"></figcaption>
          </figure>
          <button type="button" className="popup__close-button"></button>
        </div>
      </div>
      <div className="popup popup_type_delete-card">
        <div className="popup__container">
          <button type="button" aria-label="Закрыть" className="popup__close-button"></button>
          <h2 className="popup__caption">Вы уверены?</h2>
          <form id="deleteCardForm" className="popup__form" name="deleteCardForm">
            <button type="submit" className="popup__submit-button">Да</button>
          </form>
        </div>  
      </div>
      <template id="card-template">
        <li className="card">
          <img src="#" alt="" className="card__image" />
              <div className="card__info">
                <h2 className="card__title"></h2>
                <div className="card__like-container">
                  <button type="button" aria-label="Лайк" className="card__like-button"></button>
                  <span className="card__like-counter">0</span>
                </div>
              </div>
              <button type="button" aria-label="Удалить карточку" className="card__delete-button"></button>
        </li>
      </template>
  </div>
  );
}

export default App;
