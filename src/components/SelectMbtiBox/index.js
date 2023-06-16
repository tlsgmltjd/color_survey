import * as S from "./style";

const SelectMbtiBox = ({ mbti, optionGroups, updatedMbti }) => {
  return (
    <S.SelectSection>
      <S.SectionTitle>MBTI</S.SectionTitle>
      <S.SelectBtnContainer>
        {optionGroups.map((item, index) => (
          <S.SelectBtnBox key={index}>
            <S.SelectBtn
              selected={mbti[index]}
              currentMbti={item[0].value}
              onClick={() => {
                updatedMbti(index, 0, item);
              }}
            >
              <S.SelectBtnBoldText
                selected={mbti[index]}
                currentMbti={item[0].value}
              >
                {item[0].value}
              </S.SelectBtnBoldText>
              {item[0].label}
            </S.SelectBtn>
            <S.SelectBtn
              selected={mbti[index]}
              currentMbti={item[1].value}
              onClick={() => {
                updatedMbti(index, 1, item);
              }}
            >
              <S.SelectBtnBoldText
                selected={mbti[index]}
                currentMbti={item[1].value}
              >
                {item[1].value}
              </S.SelectBtnBoldText>
              {item[1].label}
            </S.SelectBtn>
          </S.SelectBtnBox>
        ))}
      </S.SelectBtnContainer>
    </S.SelectSection>
  );
};

export default SelectMbtiBox;
