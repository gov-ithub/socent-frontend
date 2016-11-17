import React from 'react'
import { TextField, AutoComplete } from 'material-ui'

const dataSource = ['Registrul Comertului', 'Registrul Fundatiilor', 'Mai stiu eu pe unde'];
const Entreprise = (props) => {
  return (
    <div>
      <TextField
        hintText="CUI/CIF"
        floatingLabelText="CUI/CIF"
        style={{marginRight:'4%', width: '16%'}}
      />
      <TextField
        hintText="Nume"
        floatingLabelText="Nume"
        style={{marginRight:'4%', width: '26%'}}
      />
      <AutoComplete
        style={{marginRight:'4%', width: '20%'}}
        textFieldStyle={{width: '100%'}}
        listStyle={{width: 'inherit'}}
        floatingLabelText="Inregistrata la"
        filter={AutoComplete.noFilter}
        openOnFocus={true}
        dataSource={dataSource}
      />
      <TextField
        hintText="J1234564"
        style={{ width: '26%'}}
        floatingLabelText="Numarul de inregistrare"
      />
    </div>
  );
}

Entreprise.propTypes = {
};
export default Entreprise
