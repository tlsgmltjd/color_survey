import { Link } from "react-router-dom";
import * as S from "./style";
import * as C from "../../components";
import XBtn from "../../images/x.svg";
import { useState } from "react";

const MainPage = ({ data, setData, selectdFilter, setSelectdFilter }) => {
  // 할일 : ColorFilterBox 컴포넌트로 빼기

  const handleFilterDelete = () => {
    setSelectdFilter("");
  };

  // 필터된 상태에서 컬러를 추가할 시 필터된 List에 추가된 컬러가 추가되는 오류 수정
  const handleSubmit = () => {
    setSelectdFilter("");
  };

  return (
    <>
      <S.MainContainer>
        <S.MainHeader>
          MBTI별
          <br />
          <S.BoldText>좋아하는 컬러</S.BoldText>
          <S.Description>Made by. 신희성</S.Description>
          {selectdFilter ? (
            <S.ColorFilterBox onClick={handleFilterDelete}>
              {selectdFilter}
              <S.ColorFilterBoxImg src={XBtn} />
            </S.ColorFilterBox>
          ) : null}
        </S.MainHeader>
        <S.MainContent>
          <Link to="select">
            <S.ColorSurveyBtn onClick={handleSubmit}>
              <S.ColorSurveyBtnText>+ 새 컬러 등록하기</S.ColorSurveyBtnText>
            </S.ColorSurveyBtn>
          </Link>
          <C.SurveyList
            selectdFilter={selectdFilter}
            setSelectdFilter={setSelectdFilter}
            data={data}
            setData={setData}
          />
        </S.MainContent>
      </S.MainContainer>
    </>
  );
};

export default MainPage;
