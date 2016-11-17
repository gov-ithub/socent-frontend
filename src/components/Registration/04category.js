import React from 'react'
import { AutoComplete, TextField } from 'material-ui';

const dataSource = ['Societati cooperative de gradul 1', 'Cooperative de credit, Asociatii', 'Fundatii', 'Case de ajutor reciproc ale salariatilor', 'Case de ajutor reciproc ale pensionarilor', 'Societate agricola', 'Federatii'];
const Category = (props) => {
  return (
    <div>
      <AutoComplete
        style={{marginRight:'52%', width: '48%'}}
        textFieldStyle={{width: '100%'}}
        listStyle={{width: 'inherit'}}
        floatingLabelText="Categoria"
        openOnFocus={true}
        filter={AutoComplete.noFilter}
        dataSource={dataSource}
      />
      <TextField
        hintText="Arhitecti"
        style={{ marginRight:'4%', width: '48%'}}
        floatingLabelText="Uniuni de persoane juridice de tipul..."
      />
      <TextField
        hintText="Uniuni"
        style={{ width: '48%'}}
        floatingLabelText="Alte categorii de persoane juridice de tipul..."
      />
    </div>
  );
}

Category.propTypes = {
};
export default Category
