import React from "react";
import { Button } from "@mui/material";

class ErrorBoundary extends React.Component {
  /**
   * Constructor.
   */
  constructor(props) {
    super(props);
    this.state = {
      enabled: false,
    };

    this.changeEnabled = this.changeEnabled.bind(this);
  }

  /**
   * override render method.
   * @returns
   */
  render() {
    return (
      <div>
        <Button variant="contained" onClick={this.changeEnabled}>
          Change state
        </Button>
        <h1>{this.isEnabled()}</h1>
      </div>
    );
  }

  // see useLayoutEffect
  /**
   * Override componentDidMount method.
   */
  componentDidMount() {
    console.log("Mount component...");
  }

  /**
   * Override componentDidUpdate method.
   * @param {Ov} prevProps
   * @param {*} prevState
   */
  componentDidUpdate(prevProps, prevState) {
    console.log("Update component...");
  }

  /**
   * Override componentWillUnmount method.
   */
  componentWillUnmount() {
    console.log("Unmount component...");
  }

  /**
   * Check if the error boundary is enabled.
   * @returns {boolean}
   */
  isEnabled() {
    return this.state.enabled ? "Enabled" : "Disabled";
  }

  changeEnabled() {
    this.setState({
      enabled: !this.state.enabled,
    });
  }
}

export default ErrorBoundary;
