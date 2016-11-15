import React, {Component, PropTypes} from "react";
import {Link} from "react-router";
import {Drawer, Card, CardHeader, Divider, List, ListItem, makeSelectable} from "material-ui";
import ActionHome from "material-ui/svg-icons/action/home";
import ActionStore from "material-ui/svg-icons/action/store";
import ActionSettings from "material-ui/svg-icons/action/settings";
import ActionHelp from "material-ui/svg-icons/action/help";
import SocialPeople from "material-ui/svg-icons/social/people";

const style = {
  navi: {display: 'flex', flexDirection: 'column', height: 'calc(100% - 52px)', paddingTop: 0, paddingBottom: 0}
}

let SelectableList = makeSelectable(List);

function wrapState(ComposedComponent) {
  return class SelectableList extends Component {
    static propTypes = {
      children: PropTypes.node.isRequired,
      defaultValue: PropTypes.string.isRequired,
      style: PropTypes.object
    };
    componentWillMount() {
      this.setState({
        selectedIndex: this.props.defaultValue,
      });
    }

    handleRequestChange = (event, index) => {
      this.setState({
        selectedIndex: index,
      });
    };

    render() {
      return (
        <ComposedComponent
          value={this.state.selectedIndex}
          onChange={this.handleRequestChange}
          style={this.props.style}
          >
            {this.props.children}
          </ComposedComponent>
        );
      }
    };
  }

SelectableList = wrapState(SelectableList)

const Sidebar = (props) => (
  <Drawer
    containerStyle={{height: 'calc(100% - 64px)', top: 64}}
    open={props.open}>
    <Card>
      <CardHeader
        // title={this.props.profile.name}
        subtitle='Bine ai venit'
        // avatar={this.props.profile.picture}
      />
    </Card>

    <SelectableList defaultValue="dashboard" style={style.navi}>
      <ListItem
        value="dashboard"
        primaryText="Dashboard"
        leftIcon={<ActionHome color='#004990'/>}
        style={{color: '#004990'}}
        containerElement={<Link to="/admin" />} />
      <Divider />
      <ListItem
        value="intreprinderi"
        primaryText="Intreprinderi"
        leftIcon={<ActionStore color='#004990'/>}
        style={{color: '#004990'}}
        containerElement={<Link to="/admin/intreprinderi" />}
        initiallyOpen={false} />
      <Divider />
      <ListItem
        value="utilizatori"
        primaryText="Utilizatori"
        leftIcon={<SocialPeople color='#004990'/>}
        initiallyOpen={false}
        style={{color: '#004990', borderBottom:'1px solid #E0E0E0'}}
        primaryTogglesNestedList={true}
        nestedListStyle={{paddingTop:0, paddingBottom:0}}
        nestedItems={[
          <ListItem
            value="utilizatori.lista"
            key={1}
            insetChildren={true}
            primaryText="Lista"
            style={{color: '#004990'}}
            containerElement={<Link to="/admin/utilizatori" />}/>
          ]}
        />
      <Divider />
      <br/>
      <Divider style={{flexGrow:'1', backgroundColor:'white'}}/>
      <ListItem
        value="profil"
        primaryText="Profil"
        leftIcon={<ActionSettings color='#004990' />}
        style={{color: '#004990'}}
        containerElement={<Link to="/admin/profil" />} />
      <ListItem
        value="ajutor"
        primaryText="Ajutor"
        style={{color: '#004990'}}
        leftIcon={<ActionHelp color='#004990'/>}
        containerElement={<Link to="/admin/ajutor" />} />
    </SelectableList>
  </Drawer>
)
export default Sidebar
