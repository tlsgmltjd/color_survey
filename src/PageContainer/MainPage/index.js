import { Link } from "react-router-dom";
import * as S from "./style";
import * as C from "../../components";

const MainPage = () => {
  return (
    <>
      <S.MainContainer>
        <S.MainHeader>
          MBTI별<S.BoldText>좋아하는 컬러</S.BoldText>
        </S.MainHeader>
        <S.MainContent>
          <Link to="select">
            <S.ColorSurveyBtn>
              <S.ColorSurveyBtnText>+ 새 컬러 등록하기</S.ColorSurveyBtnText>
            </S.ColorSurveyBtn>
          </Link>
          <C.SurveyList></C.SurveyList>
        </S.MainContent>
      </S.MainContainer>
    </>
  );
};

export default MainPage;