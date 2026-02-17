import React from 'react'

const UserCard = ({user}) => {
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
                    <button className="btn btn-primary">Ignore</button>
                    <button className="btn btn-secondary">Interested</button>
                </div>
            </div>
        </div>
    )
}

export default UserCard