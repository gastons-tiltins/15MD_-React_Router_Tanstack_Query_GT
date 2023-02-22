import {useState} from 'react';
import NavBar from './pages/NavBar';
import About from './pages/About';
import {Characters} from './pages/Characters';
import {Character} from './pages/Character';
import Home from './pages/Home';
import NoPage from './pages/NoPage';
import {Routes, Route} from 'react-router-dom';

function App() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/character' element={<Characters />} />
                <Route path='/character/:id' element={<Character />} />
                <Route path='/about' element={<About />} />
                <Route path='/*' element={<NoPage />} />
            </Routes>
        </>
    );
}

export default App;
