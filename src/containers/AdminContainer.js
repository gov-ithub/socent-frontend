import React, {PropTypes, Component} from 'react'
import utils from '../utils'
import Admin from '../components/Admin'
import axios from 'axios'


export default class AdminContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: this.props.auth.getProfile(),
      isLoading: true,
      enterprises: [],
      modalState: false,
      submissionDate: null,
      enterpriseName: '',
      enterpriseNumber: '',
      openConfirm: false
    };

  }
  handleModalOpen() {
    this.setState({modalState: true});
  }
  addEnterpriseEntry(enterprise){
    const newEnterprise = {
      number: this.state.enterpriseNumber,
      name: this.state.enterpriseName,
      applicationDate: this.state.submissionDate,
      //owner: this.state.profile.name
    }
    axios.post('https://socent.cezarneaga.eu/api/v1/enterprises', newEnterprise)
    .then(response => {
      const enterprise = response.data.enterprise
      this.setState({
        enterprises: this.state.enterprises.concat([enterprise]),
        modalState: false,
        submissionDate: null
      })
    })
    .catch(function (error) {
      console.log(error);
    })
  }
  initiateDeleteEntry() {
    this.setState({
      openConfirm: true
    });
  }
  deleteEnterpriseEntry(id) {
    axios.delete(`https://socent.cezarneaga.eu/api/v1/enterprises/${id}`)
    //axios.patch(`https://socent.cezarneaga.eu/api/v1/enterprises/${id}`,{status:10})
    const enterprises = this.state.enterprises.filter(enterprise => enterprise.id !== id)
    this.setState({
      openConfirm: false,
      enterprises: enterprises
    });
  }
  handleModalClose() {
    this.setState({modalState: false});
  }
  handleDateChange(e, date) {
    this.setState({ submissionDate: date })
  }
  handleNameChange(e) {
    this.setState({ enterpriseName: e.target.value })
  }
  handleNumberChange(e) {
    this.setState({ enterpriseNumber: e.target.value })
  }

  componentDidMount() {
    utils
      .getEnterprises()
      .then(enterprises => {
        this.setState({
          enterprises: enterprises.data.enterprises,
          isLoading: false
        })
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
          handleNumberChange={this.handleNumberChange.bind(this)}
          addEnterpriseEntry={this.addEnterpriseEntry.bind(this)}
          deleteEnterpriseEntry={this.deleteEnterpriseEntry.bind(this)}
          initiateDeleteEntry={this.initiateDeleteEntry.bind(this)}
          modalState={this.state.modalState}
          submissionDate={this.state.submissionDate}
          enterpriseName={this.state.enterpriseName}
          enterpriseNumber={this.state.enterpriseNumber}
          enterprises={this.state.enterprises}
          openConfirm={this.state.openConfirm}/>
      </div>
    );
  }
}
AdminContainer.contextTypes = {
  router: PropTypes.object.isRequired,
};
