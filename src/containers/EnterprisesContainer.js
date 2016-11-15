import React, {PropTypes as T, Component} from 'react'
import API from '../api/API.js'
import Enterprises from '../components/Enterprises'

export default class EnterprisesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      enterprises: [],
    };
    this.API = new API();
  }

  componentDidMount() {
    this.API
      .getEnterprise()
      .list({'status': 'neq|10'})
      .then(enterprises => {
        this.setState({
          enterprises: enterprises.data.enterprises,
          isLoading: false
        });
      });
  }

  render() {
    const { isLoading, enterprises } = this.state;
    return (
      <div>
        <Enterprises
          isLoading={isLoading}
          enterprises={enterprises} />
      </div>
    );
  }
}
EnterprisesContainer.contextTypes = {
  router: T.object.isRequired,
};
