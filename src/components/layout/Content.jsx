import React from "react";
import './Content.css';
import {Switch, Routes, Route} from 'react-router-dom';
import About from '../../views/examples/About';
import Home from '../../views/examples/Home';
import Param from '../../views/examples/Param';
import NotFound from '../../views/examples/NotFound';

const Content = props => (
    <main className="Content">
        <Routes>
            <Route path='/about' element={<About/>}>
            </Route>
            <Route path='/param/:id' element={<Param/>}></Route>
            <Route exact path='/' element={<Home/>}></Route>
            <Route path='*' element={<NotFound/>}></Route>
        </Routes>
    </main>
)

export default Content;