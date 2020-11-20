import React from "react";
import { connect } from "react-redux";

import mapDispatchToProps from "./../../action/login/loginAction";

import "./header.scss";
// import { useHistory } from "react-router-dom";

// import PropTypes from 'prop-types';
// import styled from 'styled-components';

const Header = props => {
  // const history = useHistory();
  const { login, setLogin } = props;
  if (!login) {
    return null;
  }
  return (
    <header className="container header">
      <div className="row">
        <div className="col-sm-2" />
        <div className="col-sm-6">
          <h3>Star Wars</h3>
        </div>
        <div className="col-sm-4 logoutBtn">
          <input
            type="button"
            value={"Logout"}
            className="btn btn-primary"
            onClick={() => {
              sessionStorage.clear();
              // history.push("/login");
              setLogin({ login: false, username: "" });
            }}
          />
        </div>
      </div>
    </header>
  );
};

const mapStateToProps = ({ auth }) => ({
  login: auth.login
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
