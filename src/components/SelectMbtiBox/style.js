import styled from "styled-components";

export const SelectBtnContainer = styled.div``;

export const SelectBtnBox = styled.div`
  display: flex;
  margin: 15px 0;
  gap: 15px;
`;

export const SelectBtn = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
  height: 80px;
  font-size: 25px;
  color: #8892a6;
  padding: 0 40px;

  background: ${(props) =>
    props.selected == props.currentMbti ? "#464E5E" : "white"};

  border: 2px solid #e7ebf2;
  border-radius: 13px;

  cursor: pointer;

  &:hover {
    background: ${(props) =>
      props.selected == props.currentMbti ? "#464E5E" : "#f5f7fb"};
  }

  @media screen and (max-width: 944px) {
    font-size: 20px;
  }
`;

export const SelectBtnBoldText = styled.span`
  font-size: 35px;
  font-weight: 600;
  color: ${(props) =>
    props.selected == props.currentMbti ? "white" : "#464e5e"};

  @media screen and (max-width: 944px) {
    font-size: 28px;
  }
`;

export const SelectSection = styled.section`
  width: 100%;
  display: flex;

  flex-direction: column;

  justify-content: center;
`;

export const SectionTitle = styled.h2`
  display: flex;
  justify-content: left;
  font-size: 25px;
  font-weight: 500;
  color: #464e5e;
`;
