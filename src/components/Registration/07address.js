import React from 'react'
import { TextField, AutoComplete } from 'material-ui';
const dataSource = [{"id":"AB","name":"Alba"},{"id":"B","name":"Bucuresti"}]
const dataSourceConfig = {
  text: 'name',
  value: 'id',
};
const Address = (props) => {

  return (
    <div>
      <AutoComplete
        style={{marginRight: '4%',width: '16%'}}
        textFieldStyle={{width: '100%'}}
        listStyle={{width: 'inherit'}}
        floatingLabelText="Judetul"
        filter={AutoComplete.noFilter}
        openOnFocus={true}
        dataSourceConfig={dataSourceConfig}
        dataSource={dataSource}
      />
      <TextField
        hintText="Sebes"
        floatingLabelText="Localitatea"
        style={{marginRight:'4%', width: '26%'}}
      />
      <TextField
        hintText="Str. Aleea Parc, Bl. 4, Ap. 6, 515800"
        floatingLabelText="Introduceti adresa"
        style={{width: '50%'}}
      /><br /><br/>
      <TextField
        hintText="0722334455"
        floatingLabelText="Telefon"
        style={{marginRight:'4%', width: '22%'}}
      />
      <TextField
        hintText="017242565"
        floatingLabelText="Fax"
        style={{marginRight:'4%', width: '22%'}}
      />
      <TextField
        hintText="ioana.mavrodan@gmail.com"
        floatingLabelText="Email"
        style={{marginRight:'4%', width: '22%'}}
      />
      <TextField
        hintText="http://..."
        floatingLabelText="Website"
        style={{ width: '22%'}}
      />
    </div>
  );
}

export default Address
