import React, { PropTypes } from 'react'
import Loading from '../Loading'
const styles = {
  container: {
    display: "block",
    minHeight: "calc(100vh - 110px)"
  }
}
function RegistrationUI(props) {
  return (
    <div>
      <h1>Inregistrare</h1>
    </div>
  );
}
RegistrationUI.propTypes = {
  enterprisesData: PropTypes.arrayOf(React.PropTypes.object).isRequired,
};
function Registration(props) {
  return (
    <div style={styles.container}>
      {
        props.isLoading === true
          ? <Loading />
          : <RegistrationUI
              enterprisesData={props.enterprisesData} />
      }
    </div>
  );
}
Registration.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};
export default Registration;
