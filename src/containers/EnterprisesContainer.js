import React, {PropTypes as T, Component} from 'react'
import utils from '../utils'
import Enterprises from '../components/Enterprises'

export default class EnterprisesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      enterprises: {},
    };
  }
  componentDidMount() {
    fetch(`/enterprises`, {
      accept: 'application/json',
    })
    .then(utils.checkStatus)
    .then(utils.parseJSON)
    .then(response => {
      this.setState({
        isLoading: false,
        enterprises: response.enterprisesData
      });
    })
  }
  render() {
    return (
      <div>
        <Enterprises
          isLoading={this.state.isLoading}
          enterprisesData={this.state.enterprises} />
      </div>
    );
  }
}
EnterprisesContainer.contextTypes = {
  router: T.object.isRequired,
};
