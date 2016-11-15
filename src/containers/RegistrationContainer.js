import React, {PropTypes, Component} from 'react'
import Registration from '../components/Registration'
import API from '../api/API'

export default class RegistrationContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      enterprises: {},
    };
    this.API = new API();
  }

  componentDidMount() {
    const id = this.props.params.id

    this.API
      .getEnterprise
      .getByID(id)
      .then(enterprise => {
        this.setState({
          enterprise: enterprise.data,
          isLoading: false
        })
      })
	}

  render() {
    return (
      <div>
        <Registration
          isLoading={this.state.isLoading}
          enterprises={this.state.enterprises} />
      </div>
    );
  }
}
RegistrationContainer.contextTypes = {
  router: PropTypes.object.isRequired,
};
