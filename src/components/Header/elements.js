import styled from "styled-components";

export const HeaderComponent = styled.section`
  position: relative;
  display: flex;
  flex-direction: row;
  // background-color: black;
  background-color: #b5d491;
  color: #2f4858;
`;

export const HeaderTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 200px;
  align-items: flex-start;
`;

export const HeaderName = styled.h1`
  margin-top: 80px;
  font-family: "Roboto Slab", Georgia, serif;
  font-weight: normal;
  font-size: 60px;
  line-height: 40px;
`;

export const HeaderStatus = styled.h2`
  margin-top: 20px;
  font-family: "Roboto Slab", Georgia, serif;
  font-weight: normal;
  font-size: 24px;
  line-height: 40px;
`;

export const HeaderSocial = styled.div`
  height: 50px;
  margin-bottom: 40px;
`;

export const Icon = styled.img`
  height: 100%;
  margin-right: 10px;
  // filter: invert(100%);
`;

export const HeaderPhotoWrapper = styled.div`
  position: relative;
  background-size: cover;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: auto;
  margin-right: 200px;
`;

export const HeaderPhoto = styled.img`
  width: 180px;
  box-shadow: 5px 2px 5px grey;
`;
