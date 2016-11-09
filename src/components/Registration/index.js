import React, { PropTypes } from 'react'
import Loading from '../Loading'
import {RadioButton, RadioButtonGroup, Divider, TextField, SelectField, MenuItem, DatePicker} from 'material-ui';
// import ComboBox from 'belle'
import areIntlLocalesSupported from 'intl-locales-supported'
let DateTimeFormat
if (areIntlLocalesSupported(['ro', 'ro-RO'])) {
  DateTimeFormat = global.Intl.DateTimeFormat
} else {
  const IntlPolyfill = require('intl')
  DateTimeFormat = IntlPolyfill.DateTimeFormat
  require('intl/locale-data/jsonp/ro')
  require('intl/locale-data/jsonp/ro-RO')
}
// const districts = {
//
// }
const styles = {
  radioButton: {
    marginRight: 26,
    width: 'auto',
    float: 'left',
    whiteSpace: 'nowrap'
  },

}
function RegistrationUI(props) {
  return (
    <div>
      <h1>Inregistrare</h1>
      <h4>Ce fel de inregistrare vrei sa inregistrezi?</h4>
      <RadioButtonGroup
        name="registration_type"
        //valueSelected={props.}
        defaultSelected="regular">
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
      <h4>Cine depune cererea?</h4>
      <Divider />
      <p>Colectam date despre depunator (după caz, de către reprezentantul legal sau de către persoana împuternicită în acest scop)</p>

      <TextField
        hintText="CNP/CIF"
        floatingLabelText="Introduceti codul CNP/CIF"
      />
      <TextField
        hintText="Nume si Prenume"
        floatingLabelText="Introduceti numele"
      /><br /><br/>
      <SelectField
          floatingLabelText="Act de identitate"
          // value={this.props.typeID}
          // onChange={this.props.handleChange}
          value={1}
        >
          <MenuItem value={1} primaryText="Buletin" />
          <MenuItem value={2} primaryText="Pasaport" />
      </SelectField>
      <TextField
        hintText="AA"
        floatingLabelText="Serie"
      />
      <TextField
        hintText="123456"
        floatingLabelText="Numar"
      />
      <TextField
        hintText="Organul emitent"
        floatingLabelText="Eliberat de"
      />
      <DatePicker
        hintText="Alegeti data eliberarii"
        DateTimeFormat={DateTimeFormat}
        okLabel="OK"
        cancelLabel="Anulati"
        locale="ro"
        //value={this.state.controlledDate}
        //onChange={this.handleChange}
      />
      <TextField
        hintText="Director"
        floatingLabelText="In calitate de"
      />
      <SelectField
          floatingLabelText="Documente uploadate"
          // value={this.props.typeID}
          // onChange={this.props.handleChange}
          value={1}
        >
          <MenuItem value={1} primaryText="Lista documente uploadate" />
          <MenuItem value={2} primaryText="Statutul asociatiei" />
      </SelectField>
      <br /><br />
      <h4>Care este entitatea juridica?</h4>
      <Divider />
      <p>Colectam date despre entitatea juridica ce vrea sa primeasca atestatul de intreprindere sociala</p>
      <TextField
        hintText="CUI/CIF"
        floatingLabelText="Introduceti codul CUI/CIF"
      />
      <TextField
        hintText="Nume"
        floatingLabelText="Introduceti numele entitatii juridice"
      />
      <SelectField
          floatingLabelText="Inregistrata la"
          // value={this.props.typeID}
          // onChange={this.props.handleChange}
          value={1}
        >
          <MenuItem value={1} primaryText="Lista registrelor" />
          <MenuItem value={2} primaryText="Registrul Comertului" />
      </SelectField>
      <TextField
        hintText="J1234564"
        floatingLabelText="Introduceti numarul de inregistrare"
      />
      <br /><br />
      <h4>Care este categoria de intreprindere sociala?</h4>
      <Divider />
      <p>Carei categorii din cele prevăzute la art. 3 alin.(1) din Legea nr. 219/2015 privind economia socială ii apartine?</p>
      <SelectField
          floatingLabelText="Categoria"
          autoWidth={true}
          // value={this.props.typeID}
          // onChange={this.props.handleChange}
          value={3}
        >
          <MenuItem value={1} primaryText="Societati cooperative de gradul 1" />
          <MenuItem value={2} primaryText="Cooperative de credit, Asociatii" />
          <MenuItem value={3} primaryText="Fundatii" />
          <MenuItem value={4} primaryText="Case de ajutor reciproc ale salariatilor" />
          <MenuItem value={5} primaryText="Case de ajutor reciproc ale pensionarilor" />
          <MenuItem value={6} primaryText="Societate agricola" />
          <MenuItem value={7} primaryText="Federatii" />
          <MenuItem value={8} primaryText="Uniuni de persoane juridice de tipul..." />
          <MenuItem value={9} primaryText="Alte categorii de persoane juridice de tipul..." />
      </SelectField>

      <br /><br />
      <h4>Sediul social si puncte de lucru?</h4>
      <Divider />
      <p>Adresa sediului social si posibilitatea de a adauga puncte de lucru.</p>
      {/* <ComboBox placeholder={ 'Alege Judetul' }
        onUpdate={ (event) => {
          console.log(event.value);
          console.log(event.identifier);
          console.log(event.isMatchingOption);
          console.log(event.isOptionSelection); }}
          maxOptions={ 5 }>
          {
            districts.map((district, index) => {
              return (
                <Option value={ district.name }
                identifier={ district.code }
                key={ index }>
                { district.name }
                </Option>
              );
            })
          }
        </ComboBox> */}
      <SelectField
          floatingLabelText="Judet"
          // value={this.props.typeID}
          // onChange={this.props.handleChange}
          value='AB'
        >
          <MenuItem value='AB' primaryText="Alba" />
          <MenuItem value='SB' primaryText="Sibiu" />
      </SelectField>
      <SelectField
          floatingLabelText="Localitate"
          // value={this.props.typeID}
          // onChange={this.props.handleChange}
          value={1}
        >
          <MenuItem value={1} primaryText="Alba Iulia" />
          <MenuItem value={2} primaryText="Sebes" />
      </SelectField>
      <br /><br />
      <TextField
        hintText="Str. ..."
        floatingLabelText="Numele strazii"
      />
      <TextField
        hintText="123"
        floatingLabelText="Numar"
      />
      <TextField
        hintText="123"
        floatingLabelText="Bloc"
      />
      <TextField
        hintText="123"
        floatingLabelText="Scara"
      />
      <TextField
        hintText="123"
        floatingLabelText="Etaj"
      />
      <TextField
        hintText="123"
        floatingLabelText="Apartament"
      />

      {/*
        Folosim o componenta de adresa si ai posibilitatea de a adauga pe langa adresa sediului social si puncte de lucru. Daca gasim baza de date cu judete si orase am putea face ComboBox Select with Hierarchical data: alegi judet si atunci faci callback la lista localitati.
        * {etaj: string}
        * {apartament: string}
        * {cod postal: INT}
        * {telefon: string}
        * {fax: string}
        * {email:string, email}
      */}
    </div>
  );
}
RegistrationUI.propTypes = {
  enterprisesData: PropTypes.arrayOf(React.PropTypes.object).isRequired,
};
function Registration(props) {
  return (
    <div style={styles.container}>
      {
        props.isLoading === true
          ? <Loading />
          : <RegistrationUI
              enterprisesData={props.enterprisesData} />
      }
    </div>
  );
}
Registration.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};
export default Registration;
