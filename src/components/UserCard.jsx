import React from 'react'
import { BASE_URL } from '../utils/constants'
import axios from 'axios'
import { removeFeed } from '../redux/feedSlice'
import { useDispatch } from 'react-redux'

const UserCard = ({ user }) => {
    const dispatch = useDispatch();

    const reviewFeed = async (status) => {
        try {
            await axios.post(BASE_URL + "/request/send/" + status + "/" + user._id, {
            }, {
                withCredentials: true
            })
            dispatch(removeFeed(user._id))
        } catch (err) {
            console.error(err.message)
        }
    }

    return (
        <div className="card bg-base-300 w-96 shadow-sm max-h-fit">
            <figure>
                <img
                    src={user?.photoUrl}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{user.firstName} {user.lastName}</h2>
                <p>{user?.gender}</p><span>{user?.age}</span>
                <p>{user.about}</p>
                <div className="card-actions justify-center my-3">
                    <button className="btn btn-primary" onClick={() => reviewFeed('ignored')}>Ignore</button>
                    <button className="btn btn-secondary" onClick={() => reviewFeed('interested')}>Interested</button>
                </div>
            </div>
        </div>
    )
}

export default UserCard