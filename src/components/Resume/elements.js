import styled from "styled-components";

export const ResumeComponent = styled.section`
  position: relative;
  border-bottom: none;
  padding-bottom: 50px;
  background-color: ${({ theme }) => theme.spaceBg};
  color: ${({ theme }) => theme.spaceText};
  flex: 1;
`;

export const ResumeWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  margin-left: 50px;
  margin-right: 50px;
  margin-top: 20px;
  @media (min-width: 320px) and (max-width: 768px) {
    margin-left: 10px;
  }
`;

export const ResumeFrame = styled.iframe`
  width: 100%;
  height: 100vh;
  @media (min-width: 320px) and (max-width: 768px) {
    display: none;
  }
`;

export const DownloadButton = styled.a`
  &:hover {
    opacity: 0.7;
  }
  background-color: #42493a;
  border: none;
  border-radius: 5%;
  width: 120px;
  height: 40px;
  color: #f5fced;
  padding: 15px 32px;
  margin-left: 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
`;
