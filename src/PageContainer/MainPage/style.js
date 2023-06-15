import styled from "styled-components";

// max-width: - 요소의 최대 너비를 제한하는 속성

export const MainContainer = styled.div`
  width: 100%;
  max-width: 865px;
  display: flex;
  gap: 50px;

  margin: 80px auto;
`;

export const MainHeader = styled.header`
  width: 300px;
  height: 300px;
  background: #f5f7fb;
  border-radius: 50px;
  font-weight: 300;
  text-align: right;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 40px;
  color: #464e5e;
`;

export const BoldText = styled.span`
  font-weight: 700;
`;

export const MainContent = styled.main`
  flex-grow: 1;
`;

export const ColorSurveyBtn = styled.button`
  width: 100%;
  height: 80px;
  border: 2px dashed #dee3ec;
  background: white;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #f5f7fb;
  }
`;

export const ColorSurveyBtnText = styled.div`
  font-weight: 400;
  font-size: 22px;
  text-align: left;
  padding: 22px;
  color: #464e5e;
`;
