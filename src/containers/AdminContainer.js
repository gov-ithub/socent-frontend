import React, {PropTypes, Component} from 'react'
import utils from '../utils'
import Admin from '../components/Admin'
import axios from 'axios'
export default class AdminContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      mapdata: {},
      modalState: false,
      submissionDate: null,
      enterpriseName: ''
    };

  }
  handleModalOpen() {
    this.setState({modalState: true});
  }
  addEnterpriseEntry({ submissionDate, enterpriseName } = this.state){
    axios.post('/enterprises', {
      id: utils.uniqueId(),
      name: this.state.enterpriseName,
      applicationDate: this.state.submissionDate
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    // fetch('http://localhost:3001/enterprises', {
    //   method: 'post',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json'
    //   },
    //   data: JSON.stringify({
    //     "id": utils.uniqueId,
    //     "applicationDate": submissionDate,
    //     "name": enterpriseName
    //   })
    // }).then(function(response) {
    //   return response.json()
    //
    // }).then(function(json) {
    //   console.log('parsed json: ', json)
    // }).catch(function(ex) {
    //   console.log('parsing failed: ', ex)
    // });
  }
  handleModalClose() {
    this.setState({modalState: false});
  }
  handleDateChange(e, date) {
    this.setState({ submissionDate: date }, () => console.log('date:', this.state.submissionDate));
  }
  handleNameChange(e) {
    this.setState({ enterpriseName: e.target.value }, () => console.log('name:', this.state.enterpriseName));
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
          handleModalOpen={this.handleModalOpen.bind(this)}
          handleModalClose={this.handleModalClose.bind(this)}
          handleDateChange={this.handleDateChange.bind(this)}
          handleNameChange={this.handleNameChange.bind(this)}
          addEnterpriseEntry={this.addEnterpriseEntry.bind(this)}
          modalState={this.state.modalState}
          submissionDate={this.state.submissionDate}
          enterpriseName={this.state.enterpriseName}
          enterprisesData={this.state.mapdata} />
      </div>
    );
  }
}
AdminContainer.contextTypes = {
  router: PropTypes.object.isRequired,
};
