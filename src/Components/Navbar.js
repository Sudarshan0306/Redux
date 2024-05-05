import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <h1> Navbar</h1>
            <nav>
                <ul>
                    <li>
                        <NavLink to='/'> Main Page </NavLink>
                    </li>
                    <li>
                        <NavLink to='/sample-dept'> Sample Department </NavLink>
                    </li>
                    <li>
                        <NavLink to='/second-dept'> Second Department </NavLink>
                    </li>
                    <li>
                        <NavLink to='/meat-dept'> Meat Department </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar