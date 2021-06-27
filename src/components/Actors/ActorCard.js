import React from 'react';
import { StyledActorCard } from './ActorCard.Styled';

const ActorCard = ({ image, name, country, gender, birthday, deathday }) => {
  return (
    <StyledActorCard>
      <div className="img-wrapper">
        <img src={image} alt="actor" />
      </div>
      <h1>
        {name} {gender ? `(${gender})` : null}{' '}
      </h1>
      <p>{country ? `Comes from ${country}` : 'No country known'}</p>
      <p>{birthday ? `Born: ${birthday}` : 'null'}</p>
      <p className="deathday">{deathday ? `Dead: ${deathday}` : 'Alive'}</p>
    </StyledActorCard>
  );
};

export default ActorCard;
