import React, {PropTypes, Component} from "react";

import Users from "../components/Users";

export default class UsersContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: false };
  }
  componentDidMount() {}
  render() {
    return (
      <div>
        <Users isLoading={this.state.isLoading} />
      </div>
    );
  }
}
UsersContainer.contextTypes = { router: PropTypes.object.isRequired };