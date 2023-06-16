import { Link } from "react-router-dom";
import * as S from "./style";
import * as C from "../../components";
import XBtn from "../../images/x.svg";
import { useState } from "react";

const MainPage = ({ data, setData }) => {
  return (
    <>
      <S.MainContainer>
        <S.MainHeader>
          MBTI별
          <br />
          <S.BoldText>좋아하는 컬러</S.BoldText>
          <S.ColorFilterBox>
            ENFP
            <S.ColorFilterBoxImg src={XBtn} />
          </S.ColorFilterBox>
        </S.MainHeader>
        <S.MainContent>
          <Link to="select">
            <S.ColorSurveyBtn>
              <S.ColorSurveyBtnText>+ 새 컬러 등록하기</S.ColorSurveyBtnText>
            </S.ColorSurveyBtn>
          </Link>
          <C.SurveyList data={data} setData={setData} />
        </S.MainContent>
      </S.MainContainer>
    </>
  );
};

export default MainPage;
