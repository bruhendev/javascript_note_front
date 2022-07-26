import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './components/home';

export function NoteRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}