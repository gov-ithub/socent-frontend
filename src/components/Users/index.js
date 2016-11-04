import React, { PropTypes } from 'react'
import Loading from '../Loading'
const styles = {
  container: {
    display: "block",
    minHeight: "calc(100vh - 110px)"
  }
}
function UsersUI(props) {
  return (
    <div>
      <h1>Lista Users</h1>
    </div>
  );
}
UsersUI.propTypes = {
  enterprisesData: PropTypes.arrayOf(React.PropTypes.object).isRequired,
};
function Users(props) {
  return (
    <div style={styles.container}>
      {
        props.isLoading === true
          ? <Loading />
          : <UsersUI
              enterprisesData={props.enterprisesData} />
      }
    </div>
  );
}
Users.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};
export default Users;
