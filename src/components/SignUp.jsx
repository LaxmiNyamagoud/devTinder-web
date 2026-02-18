import React, { useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../utils/constants.js';
import { useNavigate, Link } from 'react-router';
import {addUser} from '../redux/userSlice.js';
import { useDispatch } from 'react-redux';


const SignUp = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState('');
    const [emailId, setEmailId] = useState('');
    const [password, setPassword] = useState('');
    const [gender, setGender] = useState('');
    const [photo, setPhoto] = useState('');
    const [about, setAbout] = useState('');
    const [error, setError] = useState('');


    const handleSignUp = async () => {
        try {
            const user = await axios.post(`${BASE_URL}/signup`, { firstName, lastName, age, gender, photoUrl: photo, about, emailId, password }, { withCredentials: true });
            dispatch(addUser(user.data));
            navigate('/profile');
        } catch (err) {
            setError(err.message || 'An error occurred during sign up');
        }
    }

    return (
        <div className='flex justify-center my-15'><div className="card bg-base-300 w-96 shadow-sm">
            <div className="card-body">
                <h2 className="card-title">SignUp</h2>
                <div className='my-5'>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">firstName</legend>
                        <input type="text" name='firstName'
                            className="input"
                            value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">lastName</legend>
                        <input type="text" name='lastName'
                            className="input"
                            value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Email</legend>
                        <input type="text" name='emailId'
                            className="input"
                            value={emailId} onChange={(e) => setEmailId(e.target.value)} />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Password</legend>
                        <input type="password" name='password'
                            className="input"
                            value={password} onChange={(e) => setPassword(e.target.value)} />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">age</legend>
                        <input type="text" name='age'
                            className="input"
                            value={age} onChange={(e) => setAge(e.target.value)} />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">gender</legend>
                        <input type="text" name='gender'
                            className="input"
                            value={gender} onChange={(e) => setGender(e.target.value)} />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">photo URL</legend>
                        <input type="text" name='photo'
                            className="input"
                            value={photo} onChange={(e) => setPhoto(e.target.value)} />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">about</legend>
                        <input type="text" name='about'
                            className="input"
                            value={about} onChange={(e) => setAbout(e.target.value)} />
                    </fieldset>
                </div>
                <p className='text-red'>{error}</p>
                <div className="card-actions justify-center">
                    <button className="btn btn-primary" onClick={handleSignUp}>SignUp</button>
                </div>
                <Link to={'/login'}>Already have an account? Login Here</Link>
            </div>
        </div></div>
    )
}

export default SignUp