import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import User from './pages/User';
import Header from './components/Header';

export default function RoutesApp() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/user/:id" element={<User/>} />
            </Routes>
        </BrowserRouter>
    )
}