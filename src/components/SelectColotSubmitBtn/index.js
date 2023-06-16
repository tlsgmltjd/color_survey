import { useNavigate } from "react-router-dom";
import { PostData } from "../../Request/Request";
import * as S from "./style";

const SelectColotSubmitBtn = ({ mbti, colorCode, data, setData }) => {
  const navigate = useNavigate();

  // 등록 후 [previousData.data, ...data] 이렇게 데이터를 추가하여
  // 리다이렉트 되었을 때 바로 데이터가 보이게 함

  // 그렇게 하기 위해 data state를 App 컴포넌트로 올린 후 MainPage SelectPage 에 props로 내려줌

  async function PostDataFetch(fullMbti, colorCode) {
    const previousData = await PostData(fullMbti, colorCode);
    setData([previousData.data, ...data]);
  }

  const handleSubmit = () => {
    // 정규화 식을 통하여 입력받은 ColorCode의 유효성 검사.
    // '#'으로 시작하고 그 뒤에 0~9와 A~F 영 대문자로 이루어진 6글자 문자
    const regex = /^#[0-9A-Fa-f]{6}$/i;
    if (regex.test(colorCode)) {
      // 문자열이 유효하다
      const fullMbti = mbti[0] + mbti[1] + mbti[2] + mbti[3];

      PostDataFetch(fullMbti, colorCode);
      navigate("/");
    } else {
      // 문자열이 유효하지 않다.
      // 유효하지 않을 땐 default 값인 #000000 으로 POST를 보낸다.
      const fullMbti = mbti[0] + mbti[1] + mbti[2] + mbti[3];

      PostDataFetch(fullMbti, "#000000");
      navigate("/");
    }
  };

  return (
    <S.SelectColorSubmitBtn onClick={handleSubmit}>
      컬러 등록
    </S.SelectColorSubmitBtn>
  );
};
export default SelectColotSubmitBtn;
