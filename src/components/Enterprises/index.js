import React, { PropTypes } from 'react'
import Loading from '../Loading'
import ToolbarNavi from '../ToolbarNavi'
const styles = {
  containerPrivate: {
    display: "block",
    minHeight: "calc(100vh - 110px)",
    marginLeft: "256px"
  }
}
function EnterprisesUI(props) {
  return (
    <div>
      <ToolbarNavi
        singular="Intreprindere"
        list={props.enterprisesData}/>
      <h1>Lista Intreprinderi</h1>

    </div>
  );
}
EnterprisesUI.propTypes = {
  enterprisesData: PropTypes.arrayOf(React.PropTypes.object).isRequired,
};
function Enterprises(props) {
  return (
    <div style={styles.containerPrivate}>
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
