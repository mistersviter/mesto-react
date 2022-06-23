import React from 'react';
import api from '../utils/Api';
import Card from './Card';

function Main(props) {
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getInitialData()
      .then( ([cardsData, userData]) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
        setCards(cardsData);
      })
      .catch(err => console.log(err));
  }, [])
  return (
    <main className="main">
      <section className="profile page__profile">
        <div className="profile__avatar-wrapper">
          <img src={userAvatar} alt="аватар" className="profile__avatar" />
          <button type="button" aria-label="Изменить аватар" className="profile__avatar-change-button" onClick={props.onEditAvatar}></button>
        </div>
        <div className="profile__info">
          <h1 className="profile__title">{userName}</h1>
          <button type="button" aria-label="Редактировать профиль" className="button profile__edit-profile-button" onClick={props.onEditProfile}></button>
          <p className="profile__description">{userDescription}</p>        
        </div>
        <button type="button" aria-label="Добавить карточку" className="button profile__add-card-button" onClick={props.onAddPlace}></button>
      </section>
      <section className="places page__places">
        <ul className="places__cards">
          {cards.map(card => 
              <Card
                key={card._id}
                card={card}
                onCardClick={props.onCardClick}                
              />
            )
          }
        </ul>
      </section>
    </main> 
  );
}

export default Main;