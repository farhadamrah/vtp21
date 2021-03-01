import React from 'react';
import { Link } from 'react-router-dom';
import './signin.css';
import header from '../../../assets/logo.png';
import butaLogo from '../../../assets/butagrup.png';

const Signin = () => {
  return (
    <>
      <div className="main-container">
        <div className="form-header">
          <Link to="/">
            <img className="form-header-img" src={header} alt="logo" />
          </Link>
        </div>
        <div className="form-container">
          <form className="signIn-form">
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input type="email" className="form-control" name="email" />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input type="password" className="form-control" name="password" />
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input check-btn"
                name="check"
              />
              <label className="form-check-label" htmlFor="check">
                Remember me
              </label>
            </div>
            <Link to="/main-page/statistics" className="Link">
              <button type="submit" className="btn btn-primary logIn-btn">
                Log in
              </button>
            </Link>

            <div className="forgot-password">
              <Link to="#" className="Link">
                Forgot Password?
              </Link>
            </div>
            <hr />
            <Link to="/sign-up" className="Link">
              <button
                type="submit"
                className="btn btn-outline-primary createAcc-btn"
              >
                Create new account
              </button>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signin;
