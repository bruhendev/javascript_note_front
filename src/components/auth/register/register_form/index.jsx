import * as C from "./style";

export function RegisterForm() {
    return (
        <C.Form>
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" id="name" />
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email" />
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" id="password" />
            <div>
                <a href="/">Login or</a>
                <button>Register</button>
            </div>
        </C.Form>
    );
}