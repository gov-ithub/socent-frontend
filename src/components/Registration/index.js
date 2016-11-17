import React, {Component} from 'react';
import {
  Step,
  Stepper,
  StepLabel,
  StepContent,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Type from './01type.js'
import Entrepreneur from './02entrepreneur.js'
import Entreprise from './03enterprise.js'
import Category from './04category.js'
import Caens from './05caens.js'
import Domains from './06domains.js'
import Address from './07address.js'

import API from '../../api/API'


/**
 * Vertical steppers are designed for narrow screen sizes. They are ideal for mobile.
 *
 * To use the vertical stepper with the contained content as seen in spec examples,
 * you must use the `<StepContent>` component inside the `<Step>`.
 *
 * <small>(The vertical stepper can also be used without `<StepContent>` to display a basic stepper.)</small>
 */
export default class Registration extends Component {
  constructor(props){
    super(props)
    this.state = {
      isLoading:true,
      finished: false,
      stepIndex: 6,
      caenPrimary: '',
      caenSecondary: [null],
      caens: []
    }
    this.API = new API()
  }
  componentDidMount(){
    this.API
      .getCaens()
      .list()
      .then(response => {
          const modDataSource = response.data.industryClassifications.map((value, i) => {
            return ({
              clasz: value.clasz,
              description: `${value.clasz}: ${value.description}`
            })
        })
        this.setState({
          caens: modDataSource,
          isLoading: false
        })
      });
  }
  // handleSelection = (value, name) => this.setState({ [name]: value })
  // handleCustomDisplaySelections = (values) => {
  //   if (values.length) {
  //     return (
  //       <div style={{display: 'flex', flexWrap: 'wrap'}}>{values.map((caen) => (
  //         <div key={caen['id']} style={{margin: 5}}>
  //           <span>{caen['clasz']}</span> - <span>{caen['description']}</span>,
  //         </div>))}
  //       </div>)
  //   } else return 'Alege CAENurile Secundare'
  // }
  handleNext = () => {
    const {stepIndex} = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 2,
    });
  };
  handlePrev = () => {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  };
  renderStepActions(step) {
    const {stepIndex} = this.state;

    return (
      <div style={{margin: '12px 0'}}>
        <RaisedButton
          label={stepIndex === 6 ? 'Finalizare' : 'Inainte'}
          disableTouchRipple={true}
          disableFocusRipple={true}
          primary={true}
          onTouchTap={this.handleNext}
          style={{marginRight: 12}}
        />
        {step > 0 && (
          <FlatButton
            label="Inapoi"
            disabled={stepIndex === 0}
            disableTouchRipple={true}
            disableFocusRipple={true}
            onTouchTap={this.handlePrev}
          />
        )}
      </div>
    );
  }
  addCaenComponent = () => {
    const { caenSecondary } = this.state;
    const newCaenSecondary = caenSecondary.concat(null);
    this.setState({ caenSecondary: newCaenSecondary });
  }
  handleTextFieldChange(e) {
    this.setState({caenPrimary: e.target.value})
  }
  render() {
    const {finished, stepIndex} = this.state;

    return (
      <div style={{maxWidth: '85%', minHeight: '80vh', margin: 'auto', paddingBottom:200}}>
        <h3>Inregistrare</h3>
        <Stepper activeStep={stepIndex} orientation="vertical">
          <Step style={{boxSizing: 'content-box'}}>
            <StepLabel style={{fontSize:20}}>Ce fel de inregistrare vrei sa inregistrezi?</StepLabel>
            <StepContent>
              <Type />
              {this.renderStepActions(0)}
            </StepContent>
          </Step>
          <Step style={{boxSizing: 'content-box'}}>
            <StepLabel style={{fontSize:20}}>Cine depune cererea?</StepLabel>
            <StepContent>
              <Entrepreneur />
              {this.renderStepActions(1)}
            </StepContent>
          </Step>
          <Step style={{boxSizing: 'content-box'}}>
            <StepLabel style={{fontSize:20}}>Care este entitatea juridica?</StepLabel>
            <StepContent>
              <Entreprise />
              {this.renderStepActions(2)}
            </StepContent>
          </Step>

          <Step style={{boxSizing: 'content-box'}}>
            <StepLabel style={{fontSize:20}}>Care sunt domeniile de activitate economica?</StepLabel>
            <StepContent>
              <Caens
                // handleCustomDisplaySelections={this.handleCustomDisplaySelections.bind(this)}
                // handleSelection={this.handleSelection.bind(this)}
                caenSecondary={this.state.caenSecondary}
                caenPrimary={this.state.caenPrimary}
                caens={this.state.caens}
                addCaenComponent={this.addCaenComponent.bind(this)}
                handleTextFieldChange={this.handleTextFieldChange.bind(this)} />
              {this.renderStepActions(3)}
            </StepContent>
          </Step>
          <Step style={{boxSizing: 'content-box'}}>
            <StepLabel style={{fontSize:20}}>Care sunt domeniile de interventie sociala?</StepLabel>
            <StepContent>
              <Domains
                caenSecondary={this.state.caenSecondary}
                caenPrimary={this.state.caenPrimary}
                caens={this.state.caens}
                addCaenComponent={this.addCaenComponent.bind(this)}
                handleTextFieldChange={this.handleTextFieldChange.bind(this)} />
              {this.renderStepActions(4)}
            </StepContent>
          </Step>
          <Step style={{boxSizing: 'content-box'}}>
            <StepLabel style={{fontSize:20}}>Care este categoria de intreprindere sociala?</StepLabel>
            <StepContent>
              <Category />
              {this.renderStepActions(5)}
            </StepContent>
          </Step>
          <Step style={{boxSizing: 'content-box'}}>
            <StepLabel style={{fontSize:20}}>Care sunt datele de contact ale persoanei juridice?</StepLabel>
            <StepContent>
              <Address />
              {this.renderStepActions(6)}
            </StepContent>
          </Step>
        </Stepper>
        {finished && (
          <p style={{margin: '20px 0', textAlign: 'center'}}>
            <a
              href="#"
              onClick={(event) => {
                event.preventDefault();
                this.setState({stepIndex: 0, finished: false});
              }}
            >
              Click here
            </a> to reset the example.
          </p>
        )}
      </div>
    );
  }
}
