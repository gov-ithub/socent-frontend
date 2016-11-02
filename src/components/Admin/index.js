import React, { PropTypes } from 'react'
import Loading from '../Loading'
const styles = {
  container: {
    display: "block",
    minHeight: "calc(100vh - 110px)"
  }
}
function AdminUI(props) {
  return (
    <div>
      <h1>Dashboard Admin</h1>
    </div>
  );
}
AdminUI.propTypes = {
  enterprisesData: PropTypes.arrayOf(React.PropTypes.object).isRequired,
};
function Admin(props) {
  return (
    <div style={styles.container}>
      {
        props.isLoading === true
          ? <Loading />
          : <AdminUI
              enterprisesData={props.enterprisesData} />
      }
    </div>
  );
}
Admin.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};
export default Admin;
