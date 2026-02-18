import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/userSlice.js';
import { Link, useNavigate } from 'react-router';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:7777/login", {
        emailId: email, password
      }, {
        withCredentials: true
      });
      dispatch(addUser(response.data));
      navigate("/")
    } catch (err) {
      setError(err?.response?.data ?? "Something Went Wrong")
      console.log(err);
    }
  }

  return (
    <div className='flex justify-center my-15'><div className="card bg-base-300 w-96 shadow-sm">
      <div className="card-body">
        <h2 className="card-title">Login</h2>
        <div className='my-5'>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Email</legend>
            <input type="text"
              className="input"
              value={email} onChange={(e) => setEmail(e.target.value)} />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Password</legend>
            <input type="password" className="input" value={password} onChange={(e) => setPassword(e.target.value)} />
          </fieldset>
        </div>
        <p className='text-red'>{error}</p>
        <div className="card-actions justify-center">
          <button className="btn btn-primary" onClick={handleLogin}>Login</button>
        </div>
      <Link to={'/signup'}>New User? SignUp Here</Link>
      </div>
    </div></div>
  )
}

export default Login