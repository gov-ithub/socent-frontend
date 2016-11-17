// @flow
import React from 'react';
import {AutoComplete} from 'material-ui'
type Props = {
  maxSearchResults: number,
  dataSource: Array<Object>,
  name: String,
  caenCode: String,
  handleTextFieldChange: (e: Event) => void
}
const dataSourceConfig = {
  text: 'description',
  value: 'clasz',
};
const Caen = (props: Props) => {
  return (
    <div>
      <AutoComplete
        fullWidth={true}
        listStyle={{width: 'inherit'}}
        floatingLabelText='Cautati dupa descrierea clasificarii sau cod CAEN'
        filter={AutoComplete.caseInsensitiveFilter}
        maxSearchResults={props.maxSearchResults}
        dataSource={props.dataSource}
        dataSourceConfig={dataSourceConfig}
        onChange={props.handleTextFieldChange}
        value={props.caenCode === null ? '' : props.caenCode}
      />
      <br /><br />
    </div>
  );
}
export default Caen
