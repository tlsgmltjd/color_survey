import * as S from "./style";
import * as C from "../../components";
import { useState } from "react";
import RandomImg from "../../images/repeat.svg";
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

  const handleRandomColor = () => {
    const hexDigits = "0123456789ABCDEF";
    let randomCode = "";
    for (let i = 0; i < 6; i++) {
      randomCode =
        randomCode + hexDigits[Math.floor(Math.random() * hexDigits.length)];
    }
    setItem("#" + randomCode);
  };

  // 우리는 이제 이렇게 부르기로 했어요
  // SelectHeader
  // SelectMbtiBox
  // SelectColor

  return (
    <S.SelectContainer>
      <C.SelectHeader />
      <S.SelectSection>
        <S.SectionTitle>MBTI</S.SectionTitle>
        <C.SelectMbtiBox
          mbti={mbti}
          optionGroups={optionGroups}
          updatedMbti={updatedMbti}
        />
      </S.SelectSection>

      <S.SelectColorContainer>
        <S.SelectColorHeader>
          <S.SelectColorTitle>컬러</S.SelectColorTitle>
          <S.SelectColorRandomBtn onClick={handleRandomColor}>
            <S.SelectColorRandomBtnImg src={RandomImg} />
          </S.SelectColorRandomBtn>
        </S.SelectColorHeader>

        <S.SelectColorInputContainer>
          <S.SelectColorPreview value={value} />
          <S.SelectColorInput value={value} onChange={onChange} maxLength={7} />
        </S.SelectColorInputContainer>
      </S.SelectColorContainer>
      <button
        onClick={() => {
          alert(value);
        }}
      >
        등록
      </button>
    </S.SelectContainer>
  );
};

export default SelectPage;
