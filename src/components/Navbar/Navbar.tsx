import React from 'react';

import './navbar.css';

const Navbar = () => (
  <header className="navbar">
    <h1>Otaku World</h1>
    <section className="right">
      <ul>
        <li>Discovery</li>
        <li>Favorite</li>
        <li>User</li>
      </ul>
    </section>
  </header>
);

export default Navbar;
