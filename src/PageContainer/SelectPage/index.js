import * as S from "./style";
import * as C from "../../components";

const SelectPage = () => {
  return (
    <S.SelectContainer>
      <C.MbtiSelectBox />
      <S.SelectSection>MBTI</S.SelectSection>
    </S.SelectContainer>
  );
};

export default SelectPage;
