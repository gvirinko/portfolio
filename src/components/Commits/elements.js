import styled from "styled-components";

export const CommitsHeader = styled.span`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr 5fr;
  grid-column-gap: 40px;
  height: 40px;
  margin-left: 20px;
  font-weight: bold;
  @media (min-width: 320px) and (max-width: 425px) {
    display: none;
  }
`;

export const CommitsComponent = styled.section`
  position: relative;
  padding-bottom: 20px;
  background-color: ${({ theme }) => theme.spaceBg};
  color: ${({ theme }) => theme.spaceText};
  flex: 1;
`;

export const CommitsTitle = styled.h2`
  margin-top: 0;
  margin-bottom: 0;
  padding-top: 50px;
  padding-bottom: 20px;
  text-align: center;
  color: ${({ theme }) => theme.spaceText};
`;

export const Commit = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr 5fr;
  grid-column-gap: 40px;
  height: 40px;
  margin-left: 20px;
  @media (min-width: 320px) and (max-width: 425px) {
    grid-template-columns: 1fr;
    height: 80px;
    margin-bottom: 40px;
  }
`;

export const CommitDate = styled.div``;

export const RepoName = styled.div``;

export const CommitMessage = styled.div``;

// export const MoreButton = styled.button`
//   &:hover {
//     opacity: 0.7;
//   }
//   background-color: #42493a;
//   width: 100px;
//   border: none;
//   border-radius: 5%;
//   width: 120px;
//   height: 40px;
//   margin-left: auto;
//   margin-right: auto;
//   color: #f5fced;
//   font-family: Roboto, Georgia, serif;
//   font-weight: normal;
//   font-size: 16px;
// `;
