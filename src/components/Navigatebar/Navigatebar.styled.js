import styled from "styled-components";
export const MenuItem = styled.div`
  position: relative;
  padding: 0 18px;
  display: flex;
  align-items: center;
  transition: all 0.3s;
  color: white;
  &:hover {
    border-bottom: 2px solid white;
    font-weight: bolder;
    color: white;
    cursor: pointer;
  }
`;
export const Item = styled.a`
  position: relative;
  z-index: 5;
  font-size: 2em;
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;
