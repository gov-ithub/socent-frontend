import React, {Component, PropTypes} from "react";
import {Link} from "react-router";
import {Drawer, Card, CardHeader, Divider, List, ListItem, makeSelectable} from "material-ui";
import ActionHome from "material-ui/svg-icons/action/home";
import ActionStore from "material-ui/svg-icons/action/store";
import ActionSettings from "material-ui/svg-icons/action/settings";
import ActionHelp from "material-ui/svg-icons/action/help";
import SocialPeople from "material-ui/svg-icons/social/people";

const style = {
  navi: {
    display: 'flex',
    flexDirection: 'column',
    height: 'calc(100% - 52px)',
    paddingTop: 0,
    paddingBottom: 0,
  },
  listItem: {
    height: '48px',
    color: '#004990'
  }
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
    containerStyle={{height: 'calc(100% - 64px)', top: 64, overflowX: 'hidden'}}
    width={props.minified ? '80px' : null}
    >
    <Card>
      <CardHeader
        // title={props.profile.name}
        subtitle={!props.minified ? "Bine ai venit" : null}
        // avatar={props.profile.picture}
      />
    </Card>

    <SelectableList defaultValue="dashboard" style={style.navi}>
      <ListItem
        value="dashboard"
        primaryText={!props.minified ? "Dashboard" : null}
        leftIcon={<ActionHome color='#004990'/>}
        style={style.listItem}
        containerElement={<Link to="/admin" />} />
      <Divider />
      <ListItem
        value="intreprinderi"
        primaryText={!props.minified ? "Intreprinderi" : null}
        leftIcon={<ActionStore color='#004990'/>}
        style={style.listItem}
        containerElement={<Link to="/admin/intreprinderi" />}
        initiallyOpen={false} />
      <Divider />
      <ListItem
        value="utilizatori"
        primaryText={!props.minified ? "Utilizatori" : null}
        leftIcon={<SocialPeople color='#004990'/>}
        initiallyOpen={false}
        style={style.listItem}
        primaryTogglesNestedList={true}
        nestedListStyle={{paddingTop:0, paddingBottom:0}}
        nestedItems={[
          <ListItem
            value="utilizatori.lista"
            key={1}
            insetChildren={true}
            primaryText="Lista"
            style={style.listItem}
            containerElement={<Link to="/admin/utilizatori" />}/>
          ]}
        />
      <Divider />
      <br/>
      <Divider style={{flexGrow:'1', backgroundColor:'white'}}/>
      <ListItem
        value="profil"
        primaryText={!props.minified ? "Profil" : null}
        leftIcon={<ActionSettings color='#004990' />}
        style={style.listItem}
        containerElement={<Link to="/admin/profil" />} />
      <ListItem
        value="ajutor"
        primaryText={!props.minified ? "Ajutor" : null}
        style={style.listItem}
        leftIcon={<ActionHelp color='#004990'/>}
        containerElement={<Link to="/admin/ajutor" />} />
    </SelectableList>
  </Drawer>
)
export default Sidebar
