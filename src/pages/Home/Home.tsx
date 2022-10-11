import React, { ReactElement, useState } from 'react';
import { SearchBar } from '../../modules/SearchBar/SearchBar';
import { ResultsList } from '../../modules/ResultsList/ResultsList';

export const Home = (): ReactElement => {
  const [results, setResults] = useState<any>([]);

  const handleSubmit = () => {
    const mockData = [
      {
        id: '1',
        origin: 'New York',
        destination: 'Dallas',
        isActive: true,
        isMarked: false
      },
      {
        id: '2',
        origin: 'Chicago',
        destination: 'Cleveland',
        isActive: true,
        isMarked: false
      },
      {
        id: '3',
        origin: 'Seattle',
        destination: 'San Diego',
        isActive: true,
        isMarked: false
      }
    ];

    setResults(mockData);
  };

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      <ResultsList results={results} />
    </>
  );
};
