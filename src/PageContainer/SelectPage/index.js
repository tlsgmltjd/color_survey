import * as S from "./style";
import * as C from "../../components";
import { useState } from "react";
import { useInput } from "../../hooks/useInput";

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

  const [value, onChange, setItem] = useInput("#000000");

  const updatedMbti = (index, pos, item) => {
    const updatedMbti = [...mbti];
    updatedMbti[index] = item[pos].value;
    setMbti(updatedMbti);
  };

  // 이제 이렇게 부르기로 했어요
  // SelectHeader
  // SelectMbtiBox
  // SelectColor

  return (
    <S.SelectContainer>
      <C.SelectHeader />
      <C.SelectMbtiBox
        mbti={mbti}
        optionGroups={optionGroups}
        updatedMbti={updatedMbti}
      />
      <C.SelectColor value={value} onChange={onChange} setItem={setItem} />
      <S.SelectColorSubmitBtn>컬러 등록</S.SelectColorSubmitBtn>
    </S.SelectContainer>
  );
};

export default SelectPage;
