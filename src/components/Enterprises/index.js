import React, { PropTypes } from 'react'
import Loading from '../Loading'
const styles = {
  container: {
    display: "block",
    minHeight: "calc(100vh - 110px)"
  }
}
function EnterprisesUI(props) {
  return (
    <div>
      <h1>Lista Intreprinderi</h1>
    </div>
  );
}
EnterprisesUI.propTypes = {
  enterprisesData: PropTypes.arrayOf(React.PropTypes.object).isRequired,
};
function Enterprises(props) {
  return (
    <div style={styles.container}>
      {
        props.isLoading === true
          ? <Loading />
          : <EnterprisesUI
              enterprisesData={props.enterprisesData} />
      }
    </div>
  );
}
Enterprises.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};
export default Enterprises;
