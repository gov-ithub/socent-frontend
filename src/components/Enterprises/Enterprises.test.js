import React from 'react';
import ReactDOM from 'react-dom';
import Enterprises from '../Enterprises';

const enterprisesData = [{
  foo: "bar",
}];

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Enterprises 
      isLoading={true} 
      enterprisesData={enterprisesData} 
    />, 
    div
  );
});
