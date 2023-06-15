import styled from "styled-components";

export const SelectContainer = styled.div`
  width: 416px;
  margin: 80px auto;
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

export const SelectColorContainer = styled.section``;

export const SelectColorHeader = styled.div`
  display: flex;
  align-items: center;
`;

export const SelectColorTitle = styled.h2`
  font-size: 28px;
  font-weight: 500;
  color: #464e5e;
`;

export const SelectColorRandomBtn = styled.button`
  background: #f5f7fb;
  border: none;
  border-radius: 10px;
  padding: 8px;

  margin-left: 8px;

  &:hover {
    background: #edf0f5;
  }

  &:active {
    background: #dee4ee;
  }
`;

export const SelectColorRandomBtnImg = styled.img`
  width: 12px;
  height: 12px;
`;

export const SelectColorInputContainer = styled.div``;

export const SelectColorInput = styled.input``;

export const SelectColorPreview = styled.span``;
