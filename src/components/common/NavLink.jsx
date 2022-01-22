import React from 'react';
import { Link } from 'react-router-dom';

const NavLink = () => {
  const linkData = [
    { path: "/", name: "home"},
    { path: "/search", name: "search"},
    { path: "/search/more", name: "search more"},
    { path: "/NotFound", name: "Not Found"},
  ]
  
  return (
    <header>
      <h1>Ranja React-Router-Dom v6 tutorial</h1>
      <ul>
        {
          linkData.map((data, i) => {
            return (
              <Link to={data.path} key={i}>{data.name}</Link>
            )
          })
        }
      </ul>
    </header>
  );
};

export default NavLink;
