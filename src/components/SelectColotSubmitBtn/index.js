import { PostData } from "../../Request/Request";
import * as S from "./style";

const SelectColotSubmitBtn = ({ mbti, colorCode }) => {
  const handleSubmit = () => {
    // 정규화 식을 통하여 입력받은 ColorCode의 유효성 검사.
    // '#'으로 시작하고 그 뒤에 0~9와 A~F 영 대문자로 이루어진 6글자 문자
    const regex = /^#[0-9A-Fa-f]{6}$/i;
    if (regex.test(colorCode)) {
      // 문자열이 유효하다
      const fullMbti = mbti[0] + mbti[1] + mbti[2] + mbti[3];

      PostData(fullMbti, colorCode);
    } else {
      // 문자열이 유효하지 않다.
      // 유효하지 않을 땐 default 값인 #000000 으로 POST를 보낸다.
    }
  };

  return (
    <S.SelectColorSubmitBtn onClick={handleSubmit}>
      컬러 등록
    </S.SelectColorSubmitBtn>
  );
};
export default SelectColotSubmitBtn;
