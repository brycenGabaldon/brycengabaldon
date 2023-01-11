import React from 'react';

import { Route, Routes } from "react-router-dom";
import BarNav from './BarNav';
import Bartending from './Bartending';

const Bar = () => {
    return (
        <div className='outerBartending'>
            <BarNav/>
        <Routes>
        
        </Routes>
        </div>
    );
};

export default Bar;