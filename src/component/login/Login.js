import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Error from "./../error/Error";
import mapDispatchToProps from "./../../action/login/loginAction";

import "./login.scss";

class Login extends React.Component {
  constructor() {
    super();
    this.state = { username: "", password: "" };
  }

  /**
   * @description handles change in username and password
   */
  handleChange = (name, value) => {
    this.setState({ [name]: value });
  };

  /**
   * @description get the details if login credentials are correct
   */
  onSubmit = e => {
    e.preventDefault();
    const { getLoginDetail } = this.props;

    getLoginDetail(this.state);
  };

  render() {
    const { loader, error } = this.props;

    return (
      <div className="container login">
        <div className="formContainer">
          {error && <Error error={error} />}
          <form onSubmit={this.onSubmit}>
            <div className="row loginHead">
              <h2>LOGIN</h2>
            </div>
            <div className="row">
              <input
                type="text"
                placeholder="Username"
                required
                className="form-control"
                disabled={loader}
                onChange={e => {
                  this.handleChange("username", e.target.value);
                }}
              />
            </div>
            <div className="row">
              <input
                type="password"
                placeholder="Password"
                required
                className="form-control"
                disabled={loader}
                onChange={e => {
                  this.handleChange("password", e.target.value);
                }}
              />
            </div>
            <div className="row">
              <input
                type="submit"
                value={loader ? "loading..." : "Login"}
                className="btn btn-primary"
                disabled={loader}
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

Login.defaultProps = {
  loader: false
};

Login.propTypes = {
  loader: PropTypes.bool,
  error: PropTypes.string.isRequired
};

const mapStateToProps = ({ auth }) => ({
  error: auth.error,
  loader: auth.loader
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
