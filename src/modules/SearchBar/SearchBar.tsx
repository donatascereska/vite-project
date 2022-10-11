import React, { ReactElement } from 'react';
import { AutoComplete } from '../../components/AutoComplete/AutoComplete';
import { Button } from '../../components/Button/Button';

export const SearchBar = ({ onSubmit }: any): ReactElement => {
  return (
    <>
      <AutoComplete
        onPlaceSelected={(place) => {
          console.log(place);
        }}
      />
      <AutoComplete
        onPlaceSelected={(place) => {
          console.log(place);
        }}
      />
      <Button onClick={onSubmit}>Find</Button>
    </>
  );
};
