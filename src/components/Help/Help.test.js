import React from 'react';
import ReactDOM from 'react-dom';
import Help from '../Help';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Help />, div);
});
