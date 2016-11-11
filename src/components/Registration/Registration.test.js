import React from 'react';
import ReactDOM from 'react-dom';
import Registration from '../Registration';

const enterpriseData = {
  foo: "bar",
}

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Registration isLoading={true}/>, div);
});
