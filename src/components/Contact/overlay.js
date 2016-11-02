import React from 'react';
import belle from 'belle';
const ComboBox = belle.ComboBox;
const Option = belle.Option;
// const TextInput = belle.TextInput;
export default class Overlay extends React.Component {
  render() {
    return (
      <div className="overlay">
        <h4><span>300</span> Întreprinderi Sociale Inregistrate</h4>
        <div className="spacer">
        <ComboBox
          placeholder="Cauta dupa un domeniu de activitate"
          displayCaret={ true }>
          <Option value="Cultură, Artă, Sport, Recreere">Cultură, Artă, Sport, Recreere</Option>
          <Option value="Învăţământ, Educaţie, Cercetare">Învăţământ, Educaţie, Cercetare</Option>
          <Option value="Sănătate">Sănătate</Option>
          <Option value="Servicii Sociale">Servicii Sociale</Option>
          <Option value="Protecţia Mediului">Protecţia Mediului</Option>
          <Option value="Dezvoltare Economică Şi Socială">Dezvoltare Economică Şi Socială</Option>
          <Option value="Apărarea Drepturilor Şi Promovarea Intereselor Cetăţeneşti">Apărarea Drepturilor Şi Promovarea Intereselor Cetăţeneşti</Option>
          <Option value="Drepturile Femeilor Şi Egalitatea De Gen">Drepturile Femeilor Şi Egalitatea De Gen</Option>
          <Option value="Filantropie Şi Voluntariat">Filantropie Şi Voluntariat</Option>
          <Option value="Cooperare Internaţională">Cooperare Internaţională</Option>
          <Option value="Reprezentarea Intereselor De Afaceri Şi Profesionale">Reprezentarea Intereselor De Afaceri Şi Profesionale</Option>
          <Option value="Religie">Religie</Option>
          <Option value="Altele">Altele</Option>
        </ComboBox>
        </div>
        <div className="spacer">
        <ComboBox
          placeholder="Cauta o intreprindere"
          displayCaret={ true }>
          <Option value="Fara Poluare">Fara Poluare</Option>
          <Option value="Reciclam mai mult">Reciclam mai mult</Option>
          <Option value="Orasul Verde">Orasul Verde</Option>
          <Option value="Masina electrica">Masina electrica</Option>
          <Option value="Sacosa de panza">Sacosa de panza</Option>
          <Option value="Cartea de poezie">Cartea de poezie</Option>
        </ComboBox>
        </div>


      </div>
    );
  }
}
