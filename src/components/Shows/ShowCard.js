import React from 'react';
import { Link } from 'react-router-dom';
import { StyledShowCard } from './ShowCard.Styled';

const ShowCard = ({ id, name, image, summary }) => {
  const SummaryAsText = summary
    ? `${summary.split(' ').slice(0, 10).join(' ').replace(/<.+?>/g, '')}...`
    : 'No description';

  return (
    <StyledShowCard>
      <div className="img-wrapper">
        <img src={image} alt="show" />
      </div>
      <h1>{name}</h1>
      <p>{SummaryAsText}</p>
      <div className="btns">
        <Link to={`/show/${id}`}>Read More</Link>
        <button type="button">Star Me</button>
      </div>
    </StyledShowCard>
  );
};

export default ShowCard;
