import * as S from "./style";
import * as C from "../../components";
import { useState } from "react";

const SelectPage = () => {
  const optionGroups = [
    [
      { value: "E", label: "외향형" },
      { value: "I", label: "내향형" },
    ],
    [
      { value: "S", label: "감각형" },
      { value: "N", label: "직관형" },
    ],
    [
      { value: "T", label: "사고형" },
      { value: "F", label: "감정형" },
    ],
    [
      { value: "J", label: "판단형" },
      { value: "P", label: "인식형" },
    ],
  ];

  const [mbti, setMbti] = useState(["E", "S", "T", "J"]);

  const updatedMbti = (index, pos, item) => {
    const updatedMbti = [...mbti];
    updatedMbti[index] = item[pos].value;
    setMbti(updatedMbti);
  };

  return (
    <S.SelectContainer>
      <C.SelectHeader />

      <S.SelectSection>
        <S.SectionTitle>MBTI</S.SectionTitle>
      </S.SelectSection>

      <C.SelectMbtiBox
        mbti={mbti}
        optionGroups={optionGroups}
        updatedMbti={updatedMbti}
      />
    </S.SelectContainer>
  );
};

export default SelectPage;
