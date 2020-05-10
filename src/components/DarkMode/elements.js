import styled from "styled-components";
// import theme from "styled-theming";

export const DarkModeComponent = styled.section`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #b5d491;
`;

export const DarkModeButton = styled.button`
  &:hover {
    opacity: 0.7;
  }
  margin-top: 10px;
  border: none;
  border-radius: 5%;
  width: 140px;
  background-color: #42493a;
  color: #f5fced;
  padding: 5px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
`;

// const backColor = theme("mode", {
//   light: "#fff",
//   dark: "#000",
// });
