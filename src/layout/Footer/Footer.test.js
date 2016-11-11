import React from 'react';
import ReactDOM from 'react-dom';
import Footer from '../Footer';

const AuthDummy = {
  isLoggedIn: function() {
    return true;
  }
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Footer auth={AuthDummy} />, div);
});
