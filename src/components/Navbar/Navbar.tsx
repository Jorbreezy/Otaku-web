import React from 'react';

import './navbar.scss';

const Navbar = () => (
  <header className="navbar">
    <div className="title">
      <h1>Otaku World</h1>
    </div>
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
