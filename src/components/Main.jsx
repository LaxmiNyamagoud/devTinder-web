import React, { useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router'
import axios from 'axios'
import { BASE_URL } from '../utils/constants'
import { addUser } from '../redux/userSlice'

const Main = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);

    const fetchUser = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/profile/view`, { withCredentials: true })
            dispatch(addUser(response.data))
        } catch (err) {
            // if (err.response.status === 401) {
                navigate('/login')
            // }
            console.log(err)
        }
    }

    useEffect(() => {
        if (!user) {
            fetchUser()
        }
    }, [])
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Main