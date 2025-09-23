import React from "react";

class ErrorBoundary extends React.Component {
  /**
   * Constructor.
   */
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  /**
   * Override getDerivedStateFromError method.
   * @param {*} error
   * @returns
   */
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  /**
   * Override render method.
   * @returns
   */
  render() {
    return this.state.hasError ? <h1>Has error</h1> : this.props.children;
  }

  /**
   * Override componentDidCatch method.
   * @param {*} error
   * @param {*} errorInfo
   */
  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }
}

export default ErrorBoundary;
