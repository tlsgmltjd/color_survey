import styled from "styled-components";

// max-width: - 요소의 최대 너비를 제한하는 속성

export const MainContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 980px;
  display: flex;
  gap: 40px;

  margin: 80px auto;

  @media screen and (max-width: 944px) {
    width: 95%;
    margin: 30px auto;
    flex-direction: column;
    gap: 25px;
  }
`;

export const MainHeader = styled.header`
  padding: 70px 45px;
  position: sticky;
  top: 80px;
  background: #f5f7fb;
  border-radius: 50px;
  font-weight: 300;
  font-size: 40px;
  color: #464e5e;
  text-align: right;
  display: flex;
  flex-direction: column;
  height: 150px;
  flex-grow: 0;

  @media screen and (max-width: 944px) {
    justify-content: center;
    align-items: center;
    top: 30px;
    padding: 35px 45px;
  }
`;

export const BoldText = styled.span`
  font-weight: 700;
`;

export const Description = styled.p`
  font-weight: 300;
  font-size: 12px;
  margin: 5px 0 0 0;
  justify-self: center;
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

  @media screen and (max-width: 944px) {
    font-size: 18px;
    height: 70px;
  }
`;

export const ColorSurveyBtnText = styled.div`
  font-weight: 400;
  font-size: 22px;
  text-align: left;
  padding: 22px;
  color: #464e5e;

  @media screen and (max-width: 944px) {
    font-size: 18px;
  }
`;

export const ColorFilterBox = styled.div`
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.07);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 24px;
  font-size: 25px;
  font-weight: 600;
  cursor: pointer;
  width: 100px;
  border-radius: 9px;
  align-self: end;
  margin-top: 20px;

  @media screen and (max-width: 944px) {
    margin: 20px auto;
    padding: 6px 20px;
  }
`;

export const ColorFilterBoxImg = styled.img``;
