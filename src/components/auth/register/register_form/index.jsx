import { useState } from "react";
import * as C from "./style";
import { useNavigate } from "react-router-dom"

export function RegisterForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [redirectToLogin, setRedirectToLogin] = useState(false);
    const [error, setError] = useState(false);

    const navigate = useNavigate();

    

    return (
        <C.Form>
            {error && <div>Email or Password invalid</div>}
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" id="name" value={name} onChange={setName(e => e.target.value)} />
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email" value={email} onChange={setEmail(e => e.target.value)} />
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" id="password" value={password} onChange={setPassword(e => e.target.value)} />
            <div>
                <a onClick={e => setRedirectToLogin(true)}>Login or</a>
                <button>Register</button>
            </div>
        </C.Form>
    );
}