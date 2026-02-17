import React, { useState } from 'react';
import UserCard from './UserCard'
import axios from 'axios';
import { BASE_URL } from '../utils/constants.js';
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/userSlice.js';

const EditProfile = ({ user }) => {
    const dispatch = useDispatch();
    const [firstName, setFirstName] = useState(user?.firstName || '');
    const [lastName, setLastName] = useState(user?.lastName || '')
    const [age, setAge] = useState(user?.age || '')
    const [gender, setGender] = useState(user?.gender || '')
    const [photo, setPhoto] = useState(user?.photoUrl || '')
    const [about, setAbout] = useState(user?.about || '')
    const [error, setError] = useState("");
    const [showToast, setShowToast] = useState(false);

    const saveProfile = async () => {
        setError("")
        try {
            const response = await axios.patch(`${BASE_URL}/profile/edit`, { firstName, lastName, age, gender, photoUrl: photo, about }, { withCredentials: true });
            dispatch(addUser(response.data));
            setShowToast(true);
            setTimeout(() => {
                setShowToast(false);
            }, 3000);

        } catch (err) {
            setError(err.message)
        }
    }

    return (
        <>
            {user && (
                <div className='flex justify-center mx-10'>
                    <div className='flex justify-center my-15'><div className="card bg-base-300 w-96 shadow-sm">
                        <div className="card-body">
                            <h2 className="card-title">Edit Profile</h2>
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
                                <button className="btn btn-primary" onClick={saveProfile}>Save Profile</button>
                            </div>
                        </div>
                    </div></div>
                    {
                        user && <UserCard user={{ firstName, lastName, age, gender, photoUrl: photo, about }} />
                    }
                </div>
            )}
            {
                showToast &&
                <div className="toast toast-top toast-end">
                    <div className="alert alert-success">
                        <span>Profile updated successfully.</span>
                    </div>
                </div>
            }
        </>
    )
}

export default EditProfile;