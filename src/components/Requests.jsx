import React, { useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addRequest, removeRequest } from '../redux/requestsSlice';

const Requests = () => {
    const requests = useSelector((state) => state.requests);
    const dispatch = useDispatch();

    const fetchRequests = async () => {
        try {
            const res = await axios.get(`${BASE_URL}/user/requests`, { withCredentials: true })
            console.log(res.data.data)
            dispatch(addRequest(res.data.data));

        } catch (err) {
            console.log(err.message)
        }
    }

    useEffect(() => {
        fetchRequests()
    }, []);

    const reviewRequest = async (status, requestId) => {
        try {
            await axios.post(`${BASE_URL}/request/review/${status}/${requestId}`, {}, { withCredentials: true })
            dispatch(removeRequest(requestId));
        } catch (err) {
            console.log(err.message)
        }
    }

    if (!requests) return;
    if (requests.length === 0) {
        return <h1 className='text-2xl text-center font-bold'>No requests yet!</h1>
    }

    return (
        <>
            <h1 className='text-2xl text-center font-bold'>Requests</h1>
            <div className='flex flex-col items-center gap-4 my-5 max-h-100 overflow-y-auto rounded-full'>{
                requests && requests.map(request => {
                    return <div key={request.fromUserId._id} className="card card-side bg-base-300 shadow-sm w-1/2 h-40">
                        <figure>
                            <img
                                src={request.fromUserId.photoUrl}
                                alt="Movie" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{request.fromUserId.firstName} {request.fromUserId.lastName}</h2>
                            <p>{request.fromUserId.about}</p>
                            {request.fromUserId.age && request.fromUserId.gender && <p className="text-sm">{request.fromUserId.age}, {request.fromUserId.gender}</p>}
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary" onClick={() => reviewRequest("rejected", request._id)}>Reject</button>
                                <button className="btn btn-secondary" onClick={() => reviewRequest("accepted", request._id)}>Accept</button>
                            </div>
                        </div>
                    </div>
                })
            }
            </div>
        </>
    )
}

export default Requests