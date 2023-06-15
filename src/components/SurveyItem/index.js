import * as S from "./style";
import ArrowImg from "../../images/arrow.svg";

const SurveyItem = ({ item }) => {
  return (
    <S.SurveyList>
      <S.ItemContainer>
        <S.ItemID>{item.id}</S.ItemID>
        <S.ItemMbti>{item.mbti}</S.ItemMbti>
        <S.ItemArrowContainer>
          <S.ItemArrowImg src={ArrowImg} />
        </S.ItemArrowContainer>
        <S.ItemColorBox color={item.colorCode} />
        <S.ItemColorCode>{item.colorCode}</S.ItemColorCode>
      </S.ItemContainer>
    </S.SurveyList>
  );
};

export default SurveyItem;
