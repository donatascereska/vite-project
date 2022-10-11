import React, { ReactElement } from 'react';
import Autocomplete from 'react-google-autocomplete';

interface Props {
  onPlaceSelected: (place: string) => void;
}

export const AutoComplete = ({ onPlaceSelected }: Props): ReactElement => {
  return (
    <Autocomplete
      apiKey={'AIzaSyBR8cEiJI24gCfhzogRI9_xm7zNzZUHz_A'}
      onPlaceSelected={onPlaceSelected}
    />
  );
};
