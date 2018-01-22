import React, { Component } from 'react';
import App from '../components/App';
import {connect} from 'react-redux';
import {getResource} from '../actions';

class AppContainer extends Component {
  constructor() {
    super();
    this.setState({
      payload: {},
      nav: {},
      isFetching: false,
      error: null,
    });
  }
  componentDidMount() {
    this.props.getResource({type: 'nav'});
  }
  render() {
    return (
      <App {...this.state} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    payload: state.payload,
    nav: state.nav,
    isFetching: state.isFetching,
    error: state.error
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getResource: (options) => { 
      dispatch(getResource(options));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);