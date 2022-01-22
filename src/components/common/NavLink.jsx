import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const NavLink = () => {
  const linkData = [
    { path: "/anywhere", name: "나도 모름"},
    { path: "/search", name: "search"},
    { path: "/search/more", name: "search more"}
  ];

  const navigator = useNavigate()
  const moveHome = () => {
    navigator("ㅁㅁㅁ");
  }

  
  return (
    <>
      <h1>Ranja React-Router-Dom v6 tutorial</h1>
      <ul>
        {
          linkData.map((data, i) => {
            return (
              <Link to={data.path} key={i}>{data.name}</Link>
            )
          })
        }
        <li onClick={moveHome}>Home이랑께</li>
      </ul>
    </>
  );
};

export default NavLink;
