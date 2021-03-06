import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import "./index.css";
import tourists from '../../components/video/tourists.mp4';
import { Spring } from 'react-spring';
import { useSpring, animated } from 'react-spring';
import PcComponent from '../../components/FadeIn/index';


const SignUp = () => {
  const history = useHistory();
  const props = useSpring({ from: { opacity: 0 }, to: { opacity: 1 }, delay: 1000})
  const props1 = useSpring({ from: { opacity: 0 }, to: { opacity: 1 }, delay: 500 })
  const [signUpCreds, setSignUpCreds] = useState({
    username: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setSignUpCreds({ ...signUpCreds, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post('/api/users', {
        username: signUpCreds.username,
        password: signUpCreds.password,
      })
      .then((response) => {
        if (!response.data.error) {
          history.replace('/login');
        } else {
          console.log('USERNAME TAKEN');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div id="signup-container">
      <div id="animation">
      <animated.div style={props}><PcComponent /></animated.div>
      
      <div class="videezyStyling"> Free B-Roll by <a href="http://videezy.com">Videezy</a></div>
      <div id="signup-container">
        <video autoPlay loop muted
          style={{
            position: "absolute",
            width: "100%",
            left: "50%",
            top: '50%',
            height: "100%",
            objectFit: "cover",
            transform: "translate(-50%, -50%)",
            zIndex: "-1"
          }}
        >
          <source src={tourists} type="video/mp4" />
        </video>
        <div id="loginId">
          <animated.div style={props1}>
          
          <form className="form-signin">
            <label htmlFor="inputEmail" className="sr-only">
              Email address
        </label>
            <input
              type="email"
              id="inputEmail"
              className="form-control"
              name="username"
              placeholder="Email address"
              value={signUpCreds.username}
              onChange={handleChange}
            />
            <label htmlFor="inputPassword" className="sr-only">
              Password
        </label>
            <input
              type="password"
              id="inputPassword"
              className="form-control"
              name="password"
              placeholder="Password"
              value={signUpCreds.password}
              onChange={handleChange}
            />
            <button className="signupBtn btn btn-lg btn-primary btn-block" type="submit" onClick={handleSubmit}>
              Sign Up
            </button>
          </form>
          </animated.div>
        </div>
        
      </div>
      </div>
    </div>
  );
};

export default SignUp;
