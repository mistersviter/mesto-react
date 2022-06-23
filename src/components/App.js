import React from 'react';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  React.useEffect(() => {
    document.title = "mesto-react"
  }, [])

  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);    
  }

  return (
    <div className="page">
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}        
      />
      <Footer />
      <PopupWithForm
        name="change-avatar"
        title="Обновить аватар"
        children={
          <>
            <label className="popup__form-field">
              <input id="avatar-image-input" type="url" className="popup__input popup__input_type_avatar-image" name="avatar" placeholder="Ссылка на картинку" required />
              <span className="popup__input-error avatar-image-input-error"></span>
            </label>
          </>
        }
        buttonText="Сохранить"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      />
      <PopupWithForm
        name="edit-profile"
        title="Редактировать профиль"
        children={
          <>
            <label className="popup__form-field">
              <input id="name-input" type="text" className="popup__input popup__input_type_name" name="name" placeholder="Имя" minLength="2" maxLength="40" required />
              <span className="popup__input-error name-input-error"></span>
            </label>
            <label className="popup__form-field">
              <input id="description-input" type="text" className="popup__input popup__input_type_description" name="about" placeholder="О себе" minLength="2" maxLength="200" required />
              <span className="popup__input-error description-input-error"></span>
            </label>
          </>
        }
        buttonText="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      />
      <PopupWithForm
        name="add-card"
        title="Новое место"
        children={
          <>
            <label className="popup__form-field">
              <input id="card-title-input" type="text" className="popup__input popup__input_type_card-title" name="name" placeholder="Название" minLength="2" maxLength="30" required />
              <span className="popup__input-error card-title-input-error"></span>
            </label>
            <label className="popup__form-field">
              <input id="card-image-input" type="url" className="popup__input popup__input_type_card-image" name="link" placeholder="Ссылка на картинку" required />
              <span className="popup__input-error card-image-input-error"></span>
            </label>
          </>
        }
        buttonText="Создать"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      />
      <PopupWithForm
        name="delete-card"
        title="Вы уверены?"
        buttonText="Да"
        onClose={closeAllPopups}
      />
      <ImagePopup />         
  </div>
  );
}

export default App;
