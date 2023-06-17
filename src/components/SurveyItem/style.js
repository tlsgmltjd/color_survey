import styled from "styled-components";

export const SurveyList = styled.li`
  margin: 0;
  height: 76px;
  border-radius: 9px;
  padding: 0 50px;

  display: flex;
  align-items: center;

  transition: all 0.1s;

  cursor: pointer;

  &:hover {
    background: #f5f7fb;
    transition: all 0.1s;
  }

  &:active {
    background: #edf0f5;
    transition: all 0.1s;
  }

  @media screen and (max-width: 944px) {
    padding: 0 30px;
  }
`;

export const ItemContainer = styled.div`
  width: 480px;
  border-radius: 9px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 944px) {
    width: 100%;
  }
`;

export const ItemID = styled.div`
  color: #bfc8da;
  font-size: 25px;

  flex-shrink: 0;

  @media screen and (max-width: 944px) {
    font-size: 20px;
    margin-right: 5px;
  }
`;

export const ItemMbti = styled.div`
  background: #f0f2f5;
  color: #464e5e;
  width: 76px;
  border-radius: 6px;
  font-weight: bold;
  text-align: center;
  font-size: 25px;

  padding: 8px;

  flex-shrink: 0;

  @media screen and (max-width: 944px) {
    font-size: 20px;
    padding: 4px;
    width: 66px;
  }
`;

export const ItemColorBox = styled.div`
  border: 3px solid #e8e8e8;
  background: ${(props) => props.color};

  width: 40px;
  height: 40px;

  border-radius: 9px;

  flex-shrink: 0;

  @media screen and (max-width: 944px) {
    width: 30px;
    height: 30px;
  }
`;

export const ItemColorCode = styled.div`
  color: #bfc8da;
  font-size: 25px;

  flex-shrink: 0;

  @media screen and (max-width: 944px) {
    font-size: 15px;
  }
`;

export const ItemArrowContainer = styled.div`
  width: 50px;

  flex-shrink: 0;
`;

export const ItemArrowImg = styled.img``;
