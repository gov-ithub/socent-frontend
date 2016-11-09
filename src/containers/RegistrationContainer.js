import React, {PropTypes, Component} from 'react'
import Registration from '../components/Registration'

export default class RegistrationContainer extends Component {
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
			.then(res => res.json())
			.then(data => {
        this.setState({
          isLoading: false,
          enterprises: data.enterprisesData
        });
			});
	}
  render() {
    return (
      <div>
        <Registration
          isLoading={this.state.isLoading}
          enterprisesData={this.state.enterprises} />
      </div>
    );
  }
}
RegistrationContainer.contextTypes = {
  router: PropTypes.object.isRequired,
};
