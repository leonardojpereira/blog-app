import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import User from './pages/User';
import Header from './components/Header';
import Comments from './pages/Comments';
import Error from './pages/Error';

export default function RoutesApp() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/user/:id" element={<User/>} />
                <Route path="/:id/comments" element={<Comments/>} />

                <Route path='*' element={<Error/>}/>
            </Routes>
        </BrowserRouter>
    )
}