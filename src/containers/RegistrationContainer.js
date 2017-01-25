import React, {PropTypes, Component} from 'react'
import Registration from '../components/Registration'

import axios from 'axios'
import API from '../api/API'

import Logger from 'js-logger';

export default class RegistrationContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      finished: false,
      enterprise: {},
      stepIndex: 5,
      caens: [],
      districts: []
    };
    this.API = new API();
  }

  componentDidMount() {
    const id = this.props.params.id
    axios
      .all([this.API.getEnterprise().getByID(id), this.API.getCaens().list(), this.API.getDomains().list()])
      .then(axios.spread((enterprise, caens, domains) => {
        const modDataSource = caens.data.industryClassifications.map((value, i) => {
          return ({
            clasz: value.clasz,
            description: `${value.clasz}: ${value.description}`
          })
        })
        this.setState({
          enterprise: enterprise.data.enterprise,
          caens: modDataSource,
          domains: domains.data.socialInterventionDomains,
          isLoading: false
        })
      })
    )
	}
  handleNext = () => {
    const {stepIndex} = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 6,
    });
  }
  handlePrev = () => {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  }

  addCaenComponent() {
    const { secondaryIndustryClassifications } = this.state.enterprise;
    Logger.info(secondaryIndustryClassifications);
    const newCaenSecondary = secondaryIndustryClassifications.concat(null);
    const newCaenSecObject = {secondaryIndustryClassifications: newCaenSecondary}
    Logger.info(newCaenSecObject);
    this.setState({
      enterprise: {...this.state.enterprise, ...newCaenSecObject}
    });
  }

  handleTextFieldChange(e) {
    this.setState({caenPrimary: e.target.value})
  }
  render() {
    return (
      <div>
        <Registration
          isLoading={this.state.isLoading}
          finished={this.state.finished}
          stepIndex={this.state.stepIndex}
          caens={this.state.caens}
          domains={this.state.domains}
          enterprise={this.state.enterprise}
          handleNext={this.handleNext.bind(this)}
          handlePrev={this.handlePrev.bind(this)}
          addCaenComponent={this.addCaenComponent.bind(this)}
        />
      </div>
    );
  }
}
RegistrationContainer.contextTypes = {
  router: PropTypes.object.isRequired,
};
