import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
  gap: 1em;

`

export const FilterBox = styled.div`

`

export const CheckContainer = styled.ul`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.75rem;
  padding: 0;
  list-style: none;

  & li {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    cursor: pointer;
  }
`

export const CheckBox = styled.div`
display: inline-block;
width:20px;
height: 20px;
box-sizing: border-box;
border: 2px solid #2b2b2b;
background-color: ${({ isCheck }) => isCheck ? "#FF7878" : "#fff"};
border-radius: ${({ isCheck }) => isCheck ? "50%" : "none"};
transition: all 0.3s ease;
`