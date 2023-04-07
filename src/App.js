import { Route, Routes } from 'react-router-dom';

import Home from '~/Layout/Home';
import Admin from '~/Layout/Admin';
import Login from '~/Layout/Authen/Login';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    );
}

export default App;
