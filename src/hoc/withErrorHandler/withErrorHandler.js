import React, { Component, Fragment } from 'react';

import Modal from '../../components/UI/Modal/Modal';

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
      }
      // this.initInterceptors(); // where to init interceptors if componentWillMount is deprecated
    }


    // initInterceptors() { // instead of componentWillMount()
    // componentDidMount() {
    componentWillMount() {
      this.reqInterceptor = axios.interceptors.request.use(request => {
        this.setState({ error: null });
        return request;
      });

      this.resInterceptor = axios.interceptors.response.use(
        response => {
          return response
        },
        error => {
          this.setState({ error: error });
          return Promise.reject(error);
        })

    }

    errorConfirmedHandler = () => {
      this.setState({ error: null })
    }

    componentWillUnmount() {
      axios.interceptors.request.eject(this.reqInterceptor);
      axios.interceptors.response.eject(this.resInterceptor);
    }

    render() {
      return (
        <Fragment>
          <Modal
            show={this.state.error}
            modalClosed={this.errorConfirmedHandler}>
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </Fragment>
      )
    };
  }
}

export default withErrorHandler