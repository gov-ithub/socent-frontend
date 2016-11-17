import React from 'react'

import Domain from '../Domain'
import { RaisedButton } from 'material-ui';
import ContentAddCircleOutline from 'material-ui/svg-icons/content/add-circle-outline';
import { lightBlue900 } from 'material-ui/styles/colors'

const Domains = (props) => {

  return (
    <div>
      <br />
      <h6>Alege Domeniul Principal</h6>
      <Domain
        maxSearchResults={5}
        caenCode={props.caenPrimary}
        dataSource={props.caens}
        name='principal'
        handleTextFieldChange={props.handleTextFieldChange}
        />

      <h6>Alege Domenii Secundare</h6>
      <RaisedButton
        label="Adauga inca un domeniu secundar"
        backgroundColor={lightBlue900}
        labelColor='white'
        onTouchTap={props.addCaenComponent}
        icon={<ContentAddCircleOutline color='white' />}
      />
      {props.caenSecondary.map((caen, i) => {
        return <Domain
          key={`secondary-${i}`}
          caenCode={caen}
          maxSearchResults={5}
          dataSource={props.caens}/>
        })
      }
    </div>
  );
}

Domains.propTypes = {
};
export default Domains
