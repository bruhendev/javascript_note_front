import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './components/auth/login';
import { Register } from './components/auth/register';
import { Home } from './components/home';
import { Notes } from './components/notes';
import { UserEdit } from './components/users/edit';

export function NoteRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<Login />} />
                <Route path='/notes' element={<Notes />} />
                <Route path='/users/edit' element={<UserEdit />} />
            </Routes>
        </BrowserRouter>
    )
}