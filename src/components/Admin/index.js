import React, { PropTypes } from 'react'
import Loading from '../Loading'
import { RaisedButton, FlatButton, Dialog, TextField, DatePicker } from 'material-ui';
import ActionNoteAdd from 'material-ui/svg-icons/action/note-add';
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
const styles = {
  button: {
    marginRight: 20
  }
}
const customModalStyle = {
  width: 350,
  maxWidth: 'none',
};
function AdminUI(props) {
  const actions = [
    <FlatButton
      label="Cancel"
      primary={true}
      onTouchTap={props.handleModalClose}
      style={styles.button}
    />,
    <RaisedButton
      label="Submit"
      primary={true}
      onTouchTap={props.addEnterpriseEntry}
    />,
  ];
  return (
    <div>
      <h1>Bine ati venit!</h1>
      <br /><br />
      <div>
        <RaisedButton
          label="Inregistreaza o cerere primita"
          primary={true}
          onTouchTap={props.handleModalOpen}
          icon={<ActionNoteAdd />}
          style={styles.button}
        />
        <Dialog
          title="Inregistrare depunere cerere certificare"
          actions={actions}
          modal={true}
          contentStyle={customModalStyle}
          open={props.modalState}

        >
          <form onSubmit={props.addEnterpriseEntry}>
            <TextField
              floatingLabelFixed={true}
              floatingLabelText="Numele Interprinderii Aplicante"
              onChange={props.handleNameChange}
              value={props.enterpriseName}
            />
            <DatePicker
              hintText="Introduceti data depunerii dosarului"
              DateTimeFormat={DateTimeFormat}
              okLabel="OK"
              defaultDate={new Date()}
              autoOk={true}
              maxDate={new Date()}
              cancelLabel="Anulati"
              locale="ro"
              onChange={props.handleDateChange}
              value={props.submissionDate}
            />

          </form>
        </Dialog>
      </div>

    </div>
  );
}
AdminUI.propTypes = {
  enterprisesData: PropTypes.arrayOf(React.PropTypes.object).isRequired,
};
function Admin(props) {
  return (
    <div>
      {
        props.isLoading === true
          ? <Loading />
          : <AdminUI
              handleModalOpen={props.handleModalOpen}
              handleModalClose={props.handleModalClose}
              handleNameChange={props.handleNameChange}
              handleDateChange={props.handleDateChange}
              addEnterpriseEntry={props.addEnterpriseEntry}
              submissionDate={props.submissionDate}
              modalState={props.modalState}
              enterprisesData={props.enterprisesData} />
      }
    </div>
  );
}
Admin.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};
export default Admin;
