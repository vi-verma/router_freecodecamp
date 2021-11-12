import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <ul className={'nav'}>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/about'>About</Link>
            </li>
            <li>
                <Link to='/profile'>Profile </Link>
            </li>
            <li>
                <Link to='/post'>post</Link>
            </li>
            <li>
                <Link to='/unknown'>aiwehi</Link>
            </li>
        </ul>
    );
}

export default Header;