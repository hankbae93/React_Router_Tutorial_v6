import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Container = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1em;
  list-style: none;
  padding: 0;
`

const PrimaryLinkStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '1em 1.5em',
  textDecoration: "none",
  borderRadius: "15px",
  backgroundColor: '#ffe8e8',
  color: '#ff9292',
  textTransform: "uppercase"
}

const ActiveLinkStyle = {
  ...PrimaryLinkStyle,
  backgroundColor: '#ff9292',
  color: '#ffe8e8',
}

const NavBar = () => {
  const linkData = [
    { path: "/", name: "Home"},
    { path: "/books", name: "Books"}
  ];
  
  return (
    <>
      <Container>
        {
          linkData.map((data, i) => {
            return (
              <li>
                <NavLink style={({isActive}) => isActive ? ActiveLinkStyle : PrimaryLinkStyle} to={data.path} key={i}>
                  {data.name}
                </NavLink>
              </li>
            )
          })
        }
      </Container>
    </>
  );
};

export default NavBar;
