import React from 'react';

import './Nav.css';

function Nav() {
    return (
        <nav>
          <ul>
            <li>
              <a href="/">Feed</a>
            </li>
            <li>
              <a href="">Post</a>
            </li>
            <li>
              <a href="">Edit</a>
            </li>
            <li>
              <a href="">Logout</a>
            </li>
          </ul>
        </nav>
    )
}

export default Nav;
