import styled from "styled-components";

export const SelectHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderTitle = styled.h1`
  font-weight: 800;
  font-size: 40px;
  color: #464e5e;

  @media screen and (max-width: 944px) {
    font-size: 30px;
  }
`;

export const ExitBtnBox = styled.button`
  background: #f5f7fb;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 50%;
  padding: 18px;

  &:hover {
    background: #edf0f5;
  }

  &:active {
    background: #dee4ee;
  }
`;

export const ExitBtnImg = styled.img`
  width: 12px;
  height: 12px;
`;
