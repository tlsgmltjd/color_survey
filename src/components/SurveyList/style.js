import styled from "styled-components";

export const SurveyList = styled.ul`
  list-style: none;
`;

export const MoreBtn = styled.button`
  width: 150px;
  height: 40px;
  background: white;
  border: 2px dashed #dee3ec;
  border-radius: 9px;
  transition: all 0.5s;
  color: #464e5e;

  font-weight: 400;
  font-size: 18px;

  &:hover {
    scale: 1.1;
    transition: all 0.5s;
  }
`;
