import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux';
import { addFeed } from '../redux/feedSlice'
import UserCard from './UserCard';
import axios from 'axios'

const Feed = () => {
  const dispatch = useDispatch();
  const feed = useSelector((state) => state.feed);

  const getFeed = async () => {
    try {
      const response = await axios.get(BASE_URL + "/feed", {
        withCredentials: true
      });
      dispatch(addFeed(response.data.data))
    } catch (err) {
      console.error(err.message)
    }
  }

  useEffect(() => {
    if (!feed) {
      getFeed();
    }

  }, [])

  if(!feed) return ;
  if(feed.length === 0) return <h1 className='text-3xl font-bold text-center mt-10'>No new users found!</h1>

  return (

      feed && feed.length > 0 && <div className='flex justify-center'><UserCard user={feed[0]}/></div>
  )
}

export default Feed