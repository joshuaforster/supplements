import React from 'react';

import {  NavLink } from 'react-router-dom';

export default function Header() {
    return(
        <div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/supplements">Supplements</NavLink>
      </div>
    )
  }