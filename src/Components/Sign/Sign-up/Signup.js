import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import {
  universityNames,
  degreeNames,
  departmentNames,
} from '../../../Data/data';
import '../Sign-up/signup.css';
import header from '../../../assets/logo.png';

const SignUp = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className="main-container">
        <div className="form-header">
          <Link to="/">
            <img className="form-header-img" src={header} alt="header" />
          </Link>
        </div>
        <div className="form-container">
          <form className="signUp-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label htmlFor="fullName" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                className="form-control"
                name="fullName"
                ref={register}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                type="password"
                className="form-control"
                name="username"
                ref={register}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="inputEmail" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                name="inputEmail"
                ref={register}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="age" className="form-label">
                Date of Birth
              </label>
              <input
                type="date"
                className="form-control"
                name="age"
                ref={register}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="gender" className="form-label">
                Gender
              </label>
              <select className="form-control" name="gender" ref={register}>
                <option hidden value="gender">
                  Gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="university" className="form-label">
                University
              </label>
              <select className="form-control" name="university" ref={register}>
                <option hidden value="university">
                  University
                </option>
                {universityNames.map((uni) => (
                  <option> {uni} </option>
                ))}
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="faculty" className="form-label">
                Faculty
              </label>
              <input
                type="text"
                className="form-control"
                name="faculty"
                ref={register}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="degree" className="form-label">
                Degree
              </label>
              <select className="form-control" name="degree" ref={register}>
                <option hidden value="degree">
                  Degree
                </option>
                {degreeNames.map((degree) => (
                  <option>{degree}</option>
                ))}
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="department" className="form-label">
                Department
              </label>
              <select className="form-control" name="department" ref={register}>
                <option hidden value="department">
                  Department
                </option>
                {departmentNames.map((department) => (
                  <option>{department}</option>
                ))}
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="inputPassword" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                name="inputPassword"
                ref={register}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="inputConfirmPassword" className="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                className="form-control"
                name="inputConfirmPassword"
                ref={register}
              />
            </div>
            <button type="submit" className="btn btn-primary create-btn">
              Register
            </button>
            <hr />
            <span>Already have account? </span>
            <br />
            <Link to="/" className="Link">
              Log in
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
