import React from 'react';

const ActorCard = ({ image, name, country, gender, birthday, deathday }) => {
  return (
    <div>
      <div>
        <img src={image} alt="actor" />
      </div>
      <h1>
        {name} {gender ? `(${gender})` : null}{' '}
      </h1>
      <p>{country ? `Comes from ${country}` : 'No country known'}</p>
      <p>{birthday ? `Born: ${birthday}` : 'null'}</p>
      <p>{deathday ? `Dead: ${deathday}` : 'Alive'}</p>
    </div>
  );
};

export default ActorCard;
