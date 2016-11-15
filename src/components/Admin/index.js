import React, { PropTypes } from 'react'

import { Link } from 'react-router'
import { IconButton, RefreshIndicator, Snackbar } from 'material-ui';

import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

import ActionDelete from 'material-ui/svg-icons/action/delete';
import EditorModeEdit from 'material-ui/svg-icons/editor/mode-edit';
import { lightBlue900 } from 'material-ui/styles/colors'
import AddEntry from '../AddEntry'
const styles = {
  refresh: {
    display: 'inline-block',
    position: 'relative',
    float: 'right',
    marginRight: 30,
    marginTop: -84,
    zIndex: 1200,
    backgroundColor: 'none',
    boxShadow: 'none'
  },

}


function AdminUI(props) {

  return (
    <div style={{position: 'relative'}}>

      <h1>Bine ati venit!</h1>
      <br /><br />
      <AddEntry
        handleModalOpen={props.handleModalOpen}
        handleModalClose={props.handleModalClose}
        modalState={props.modalState}
        handleNumberChange={props.handleNumberChange}
        handleNameChange={props.handleNameChange}
        handleDateChange={props.handleDateChange}
        submissionDate={props.submissionDate}
        addEnterpriseEntry={props.addEnterpriseEntry}
        deleteEnterpriseEntry={props.deleteEnterpriseEntry}
        />
      <br/><br/>
      <div style={{width: '80%'}}>
        <h3>Lista cererilor primite si neintrate in procesare</h3>
        <Table>
          <TableHeader
            displaySelectAll={false}
            adjustForCheckbox={false}>
            <TableRow style={{height:30}}>
              <TableHeaderColumn style={{width:'30%', height:20, color: 'white', backgroundColor: lightBlue900, fontSize:14 }}>Intreprindere</TableHeaderColumn>
              <TableHeaderColumn style={{height:20, color: 'white', backgroundColor: lightBlue900, fontSize:14, width:'20%' }}>Data Depunere Aplicare</TableHeaderColumn>
              <TableHeaderColumn style={{height:20, color: 'white', backgroundColor: lightBlue900, fontSize:14, width:'30%' }}>Inregistrata de...</TableHeaderColumn>
              <TableHeaderColumn style={{height:20, color: 'white', backgroundColor: lightBlue900, fontSize:14, textAlign: 'right', width:'20%' }}>Actiuni</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={false}>
            {props.enterprises.map(listItem => (
            <TableRow
              key={listItem.id}
              >
              <TableRowColumn style={{width:'30%'}}>{listItem.name}</TableRowColumn>
              <TableRowColumn style={{width:'20%'}}>{listItem.applicationDate}</TableRowColumn>
              <TableRowColumn style={{width:'30%'}}>{listItem.owner}</TableRowColumn>
              <TableRowColumn style={{textAlign: 'right', width:'20%'}}>
                <IconButton
                  containerElement={<Link to={`/admin/inregistrare/${listItem.id}`} />}
                  iconStyle={{width: 18, height: 18}}>
                  <EditorModeEdit
                    color={lightBlue900} />
                </IconButton>
                <IconButton onTouchTap={() => props.initiateDeleteEntry()} iconStyle={{width: 18, height: 18}}>
                  <ActionDelete color={lightBlue900} />
                </IconButton>
                <Snackbar
                  open={props.openConfirm}
                  message="Esti sigur ca vrei sa stergi inregistrarea?"
                  action="confirm"
                  //onRequestClose={this.handleRequestClose}
                  onActionTouchTap={() => props.deleteEnterpriseEntry(listItem.id)}
                />
              </TableRowColumn>
            </TableRow>
            ))}

          </TableBody>
        </Table>
      </div>

    </div>
  );
}
AdminUI.propTypes = {
  enterprises: PropTypes.array.isRequired,
}

function Admin(props) {
  return (
    <div>
        {props.isLoading === true
          ? <RefreshIndicator
              size={50}
              left={10}
              top={0}
              loadingColor='white'
              status="loading"
              style={styles.refresh}
            />
          : <AdminUI
              handleModalOpen={props.handleModalOpen}
              handleModalClose={props.handleModalClose}
              handleNameChange={props.handleNameChange}
              handleNumberChange={props.handleNumberChange}
              handleDateChange={props.handleDateChange}
              addEnterpriseEntry={props.addEnterpriseEntry}
              deleteEnterpriseEntry={props.deleteEnterpriseEntry}
              initiateDeleteEntry={props.initiateDeleteEntry}
              submissionDate={props.submissionDate}
              modalState={props.modalState}
              enterprises={props.enterprises}
              openConfirm={props.openConfirm} />
      }
    </div>
  );
}
Admin.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};
export default Admin;
