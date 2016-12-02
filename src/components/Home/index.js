import React, {PropTypes} from 'react'
import Loading from '../Loading'
const styles = {
  container: {
    display: "block",
    minHeight: "calc(100vh - 90px)",
    paddingTop: "90px"
  }
}
function HomeUI(props) {
  return (
    <div>
      <h1>Home Containerised</h1>
    </div>
  );
}
HomeUI.propTypes = {

};

function Home(props) {
  return (
    <div style={styles.container}>
      {
        props.isLoading === true
          ? <Loading />
          : <HomeUI />
      }
    </div>
  );
}

Home.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

export default Home;
