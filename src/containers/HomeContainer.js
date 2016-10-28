import React, {PropTypes, Component} from 'react'
import utils from '../utils'
import Home from '../components/Home'

export default class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      mapdata: {},
    };
  }
  componentDidMount() {
    fetch(`/public`, {
      accept: 'application/json',
    })
    .then(utils.checkStatus)
    .then(utils.parseJSON)
    .then(response => {
      this.setState({
        isLoading: false,
        mapdata: response.mapData
      });
    })
  }
  render() {
    return (
      <div>
        <Home
          isLoading={this.state.isLoading}
          mapData={this.state.mapdata} />
      </div>
    );
  }
}
HomeContainer.contextTypes = {
  router: PropTypes.object.isRequired,
};
