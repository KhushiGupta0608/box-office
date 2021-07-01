/* eslint-disable no-underscore-dangle */
import React, { useEffect, useReducer } from 'react';
import { useParams } from 'react-router-dom';
import { apiGet } from '../misc/config';
import ShowMainData from '../components/Shows/ShowMainData';
import Details from '../components/Shows/Details';
import Seasons from '../components/Shows/Seasons';
import Cast from '../components/Shows/Cast';
import { InfoBlock, ShowPageWrapper } from '../components/Shows/Show.styled';

const reducer = (prevState, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS': {
      return { isloading: false, error: false, show: action.show };
    }
    case 'FETCH_FAILED': {
      return { ...prevState, isloading: false, error: action.error };
    }

    default:
      return prevState;
  }
};

const initialState = {
  show: null,
  error: null,
  isloading: true,
};

const Shows = () => {
  const { id } = useParams();

  const [{ show, isloading, error }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(() => {
    let IsMounted = true;

    apiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`)
      .then(results => {
        if (IsMounted) {
          dispatch({ type: 'FETCH_SUCCESS', show: results });
        }
      })
      .catch(err => {
        if (IsMounted) {
          dispatch({ type: 'FETCH_FAILED', error: err.message });
        }
      });
    return () => {
      IsMounted = false;
    };
  }, [id]);

  if (isloading) {
    return <div>Data is being loaded</div>;
  }
  if (error) {
    return <div>Error occured : {error}</div>;
  }

  return (
    <ShowPageWrapper>
      <ShowMainData
        image={show.image}
        name={show.name}
        rating={show.rating}
        summary={show.summary}
        tags={show.genres}
      />
      <InfoBlock>
        <h2>Details</h2>
        <Details
          status={show.status}
          network={show.network}
          premeired={show.premeired}
        />
      </InfoBlock>

      <InfoBlock>
        <h2>Seasons</h2>
        <Seasons seasons={show._embedded.seasons} />
      </InfoBlock>

      <InfoBlock>
        <h2>Casts</h2>
        <Cast cast={show._embedded.cast} />
      </InfoBlock>
    </ShowPageWrapper>
  );
};

export default Shows;
