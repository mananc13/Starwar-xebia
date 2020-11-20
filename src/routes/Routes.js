/**
 *
 * AuthWrapper
 *
 */
import React, { memo } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { compose } from "redux";
import { Route, Redirect } from "react-router-dom";
export function AuthWrapper({ login, component: Component, ...rest }) {
  let auth = login;
  return (
    <Route
      {...rest}
      render={props =>
        auth && props.location.pathname.includes("login") ? (
          <Redirect
            to={{
              pathname: "/home",
              state: { from: props.location }
            }}
          />
        ) : auth ? (
          <Component {...props} />
        ) : props.location.pathname.includes("login") ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}
AuthWrapper.propTypes = {
  dispatch: PropTypes.func.isRequired
};
function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

const mapStateToProps = ({ auth }) => ({
  login: auth.login
});
const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect, memo)(AuthWrapper);
