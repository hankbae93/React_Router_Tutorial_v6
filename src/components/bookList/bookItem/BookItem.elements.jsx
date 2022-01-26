import styled from "styled-components";

export const Container = styled.li`
  flex-basis: 23%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding: 1em;
  height: 550px;
  border: 1px solid #ccc;
  box-sizing: border-box;

  & h2 {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    line-height: 1.2;
    text-align: center;
  }
`;

export const BookThumbnail = styled.div`
  display: flex;
  width: 100%;
  height: 200px;
  gap: 1rem;
  
  & img {
    width: 150px;
    height: 100%;
    object-fit: cover;
  }

  & h2 {
    flex: 1;
  }
`;

export const BookInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction:column;
  gap: 5px;
  padding: 1em 15px;
  font-size: 20px;
  font-weight: bold;
  box-sizing: border-box;

  & p {
    margin: 0;
  }
`;

export const BookContents = styled.p`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 7;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 16px;
  line-height: 1.2;
  padding: 0px 15px;
  margin: 0;
`;