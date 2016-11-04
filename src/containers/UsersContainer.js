import React, {PropTypes, Component} from 'react'
import utils from '../utils'
import Users from '../components/Users'

export default class UsersContainer extends Component {
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
        <Users
          isLoading={this.state.isLoading}
          enterprisesData={this.state.mapdata} />
      </div>
    );
  }
}
UsersContainer.contextTypes = {
  router: PropTypes.object.isRequired,
};
