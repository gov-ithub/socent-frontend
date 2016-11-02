import React from 'react';
import ReactDOM from 'react-dom';
import Enterprises from '../Enterprises';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Enterprises />, div);
});
