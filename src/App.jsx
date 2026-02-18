import { BrowserRouter, Routes, Route } from 'react-router'
import Main from './components/Main.jsx'
import Login from './components/Login.jsx'
import Profile from './components/Profile.jsx'
import Feed from './components/Feed.jsx'
import Connections from './components/Connections.jsx'
import Requests from './components/Requests.jsx'
import SignUp from './components/SignUp.jsx'

function App() {
  return (
    <>
      <BrowserRouter basename='/'>
        <Routes>
          <Route path='/' element={<Main />}>
            <Route path="/" element={<Feed />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/connections" element={<Connections />} />
            <Route path="/requests" element={<Requests />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
