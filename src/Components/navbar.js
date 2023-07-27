import React from "react";
import {Link} from 'react-router-dom';

import Title from './title';

function navbar() {
    return (
        <div className="navbar">
            <Link className="navbarItem" to="/">Homepage  </Link>
            <Link className="navbarItem" to="/AddItem">New HOT thing  </Link>
            <Link className="navbarItem" to="/About">About  </Link>
        </div>
    );
}


export default navbar;