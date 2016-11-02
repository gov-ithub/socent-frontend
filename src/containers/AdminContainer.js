import React, {PropTypes, Component} from 'react'
import utils from '../utils'
import Admin from '../components/Admin'

export default class AdminContainer extends Component {
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
        <Admin
          isLoading={this.state.isLoading}
          enterprisesData={this.state.mapdata} />
      </div>
    );
  }
}
AdminContainer.contextTypes = {
  router: PropTypes.object.isRequired,
};
