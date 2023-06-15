import * as S from "./style";
import XBtn from "../../images/x.svg";
import { Link } from "react-router-dom";

const SelectPage = () => {
  return (
    <S.SelectContainer>
      <S.SelectHeader>
        <S.HeaderTitle>새 컬러 등록하기</S.HeaderTitle>
        <Link to="/">
          <S.ExitBtnBox>
            <S.ExitBtnImg src={XBtn} />
          </S.ExitBtnBox>
        </Link>
      </S.SelectHeader>
    </S.SelectContainer>
  );
};

export default SelectPage;
