import React from 'react'
import { RaisedButton, FlatButton, Dialog, TextField, DatePicker } from 'material-ui';
import ActionNoteAdd from 'material-ui/svg-icons/action/note-add';
import areIntlLocalesSupported from 'intl-locales-supported'
import { lightBlue900 } from 'material-ui/styles/colors'
let DateTimeFormat
if (areIntlLocalesSupported(['ro', 'ro-RO'])) {
  DateTimeFormat = global.Intl.DateTimeFormat
} else {
  const IntlPolyfill = require('intl')
  DateTimeFormat = IntlPolyfill.DateTimeFormat
  require('intl/locale-data/jsonp/ro')
  require('intl/locale-data/jsonp/ro-RO')
}
const styles = {
  button: {
    marginRight: 5
  },
  modal: {
    width: 350,
    maxWidth: 'none'
  }
}

function AddEntry(props) {
  const actions = [
    <FlatButton
      label="Anulati"
      primary={true}
      onTouchTap={props.handleModalClose}
      style={styles.button}
    />,
    <RaisedButton
      label="Salveaza"
      primary={true}
      onTouchTap={props.addEnterpriseEntry}
    />,
  ];
  return (
    <div>
      <RaisedButton
        label="Inregistreaza o cerere primita"
        backgroundColor={lightBlue900}
        labelColor='white'
        onTouchTap={props.handleModalOpen}
        icon={<ActionNoteAdd color='white' />}
        style={styles.button}
      />
      <Dialog
        title="Inregistrare depunere cerere certificare"
        actions={actions}
        modal={true}
        contentStyle={styles.modal}
        open={props.modalState}>

        <form onSubmit={props.addEnterpriseEntry}>
          <TextField
            id="number"
            floatingLabelFixed={true}
            floatingLabelText="Numarul Aplicatiei"
            onChange={props.handleNumberChange}
            value={props.enterpriseNumber}
          />
          <TextField
            floatingLabelFixed={true}
            floatingLabelText="Numele Interprinderii Aplicante"
            onChange={props.handleNameChange}
            value={props.enterpriseName}
          />
          <DatePicker
            floatingLabelFixed={true}
            DateTimeFormat={DateTimeFormat}
            okLabel="OK"
            defaultDate={new Date()}
            autoOk={true}
            floatingLabelText="Introduceti data depunerii dosarului"
            maxDate={new Date()}
            cancelLabel="Anulati"
            locale="ro"
            onChange={props.handleDateChange}
            value={props.submissionDate}
          />

        </form>
      </Dialog>
    </div>
  )
}
export default AddEntry
