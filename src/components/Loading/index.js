import React from 'react';
const styles = {
  container: {
    position: 'fixed',
    left: 0,
    right: 0,
    top: "60px",
    bottom: 0,

  },
  content: {
    textAlign: 'center',
    position: 'absolute',
    width: '100%',
    marginTop: '30px',
    fontSize: '55px',
  },
};
export default class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.originalText = this.props.text;
    this.state = {
      text: this.originalText,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      const newText = this.state.text === `${this.originalText}...`
        ? this.originalText
        : `${this.state.text}.`;
      this.setState({
        text: newText,
      });
    }, this.props.speed);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div style={styles.container}>
        <p style={styles.content}>{this.state.text}</p>
      </div>
    );
  }

}
Loading.propTypes = {
  text: React.PropTypes.string,
  speed: React.PropTypes.number,
};

Loading.defaultProps = {
  text: 'Loading',
  speed: 300,
};
