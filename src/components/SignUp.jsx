import React, { useState } from 'react'

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSignUp = () => {
        try {

        } catch (err) {

        }
    }

    return (
        <div>
            <div>
                <input type='text' placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type='password' placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <input type='password' placeholder='confirmpassword' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                <button onClick={handleSignUp}>Sign Up</button>
            </div>
        </div>
    )
}

export default SignUp