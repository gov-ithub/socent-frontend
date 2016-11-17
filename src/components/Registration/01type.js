import React from 'react';
import {RadioButton, RadioButtonGroup} from 'material-ui'
const styles = {
  radioButton: {
    marginRight: 26,
    width: 'auto',
    float: 'left',
    whiteSpace: 'nowrap'
  }
}
const Type = (props) => {
  return (
    <div>
      <br />
      <RadioButtonGroup
        name="registration_type"
        //valueSelected={props.}
        defaultSelected="regular"
        style={{paddingLeft:13}}>
        <RadioButton
          value="regular"
          label="Intreprindere Sociala"
          style={styles.radioButton}
        />
        <RadioButton
          value="insertion"
          label="Intreprindere Sociala de Insertie"
          style={styles.radioButton}
        />
      </RadioButtonGroup>
      <br /><br />
    </div>
  );
}

Type.propTypes = {

};
export default Type
