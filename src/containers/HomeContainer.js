import React, {PropTypes, Component} from 'react'

import Home from '../components/Home'

export default class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }
  componentDidMount() {

  }
  render() {
    return (
      <div>
        <Home isLoading={false}
           />
      </div>
    );
  }
}
HomeContainer.contextTypes = {
  router: PropTypes.object.isRequired,
};
