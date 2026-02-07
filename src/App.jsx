import { BrowserRouter, Routes, Route } from 'react-router'
import Main from './components/Main.jsx'
import Login from './components/Login.jsx'
import Profile from './components/Profile.jsx'
import Feed from './components/Feed.jsx'

function App() {
  return (
    <>
      <BrowserRouter basename='/'>
        <Routes>
          <Route path='/' element={<Main />}>
            <Route path="/" element={<Feed />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
