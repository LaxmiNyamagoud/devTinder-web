import React, { useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../utils/constants';
import { connect, useDispatch, useSelector } from 'react-redux';
import { addConnections } from '../redux/connectionSlice';

const Connections = () => {
    const connections = useSelector((state) => state.connections);
    const dispatch = useDispatch();

    const fetchConnections = async () => {
        try {
            const res = await axios.get(`${BASE_URL}/user/connections`, { withCredentials: true })
            console.log(res.data.data)
            dispatch(addConnections(res.data.data))

        } catch (err) {
            console.log(err.message)
        }
    }

    useEffect(() => {
        fetchConnections()
    }, [])

    if(!connections) return ;
    if(connections.length === 0) {
        return <h1 className='text-2xl text-center font-bold'>No connections yet!</h1>
    }

    return (
        <>
        <h1 className='text-2xl text-center font-bold'>Connections</h1>
        <div className='flex flex-col items-center gap-4 my-5 max-h-100 overflow-y-auto rounded-full'>{
            connections && connections.map(connection => {
                return <div key={connection._id} className="card card-side bg-base-300 shadow-sm w-1/2 h-40">
                    <figure>
                        <img
                            src={connection.photoUrl}
                            alt="Movie" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{connection.firstName} {connection.lastName}</h2>
                        <p>{connection.about}</p>
                        {connection.age && connection.gender && <p className="text-sm">{connection.age}, {connection.gender}</p>}
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Watch</button>
                        </div>
                    </div>
                </div>
            })
        }


        </div>
        </>
    )
}

export default Connections