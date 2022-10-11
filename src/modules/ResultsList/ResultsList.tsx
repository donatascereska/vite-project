import React, { ReactElement, useEffect, useReducer } from 'react';
import { Button } from '../../components/Button/Button';
import reducer from './reducer';

export const ResultsList = ({ results: data }: any): ReactElement => {
  const [results, setResults] = useReducer(reducer, data);

  useEffect(() => {
    setResults({
      type: 'SET',
      payload: data
    });
  }, [data]);

  const renderRoute = (route: any) =>
    route.isActive && (
      <li>
        {route.isMarked && (
          <b>
            {route.origin} - {route.destination}
          </b>
        )}
        {!route.isMarked && (
          <>
            {route.origin} - {route.destination}
          </>
        )}
        <Button
          onClick={() => {
            setResults({
              type: route.isMarked ? 'UNMARK' : 'MARK',
              payload: route.id
            });
          }}
        >
          {route.isMarked ? 'Unmark' : 'Mark'}
        </Button>
        <Button
          onClick={() => {
            setResults({ type: 'REMOVE', payload: route.id });
          }}
        >
          Remove
        </Button>
      </li>
    );

  return <ul>{results.map(renderRoute)}</ul>;
};
