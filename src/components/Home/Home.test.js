import React from 'react';
import ReactDOM from 'react-dom';
import Home from '../Home';

const mapData = [{
  foo: "bar",
}];

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Home isLoading={true} mapData={mapData}/>, div);
});
