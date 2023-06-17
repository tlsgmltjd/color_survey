import * as S from "./style";
import RandomImg from "../../images/repeat.svg";

const SelectColor = ({ value, onChange, setItem }) => {
  const handleRandomColor = () => {
    const hexDigits = "0123456789ABCDEF";
    let randomCode = "";
    for (let i = 0; i < 6; i++) {
      randomCode =
        randomCode + hexDigits[Math.floor(Math.random() * hexDigits.length)];
    }
    setItem("#" + randomCode);
  };

  // 잘못된 색상 코드를 입력했을 때, 인풋이 blur되면 #000000 으로 바뀐다.
  const handleBlur = () => {
    const regex = /^#[0-9A-Fa-f]{6}$/i;
    if (!regex.test(value)) {
      setItem("#000000");
    }
  };

  return (
    <S.SelectColorContainer>
      <S.SelectColorHeader>
        <S.SelectColorTitle>컬러</S.SelectColorTitle>
        <S.SelectColorRandomBtn onClick={handleRandomColor}>
          <S.SelectColorRandomBtnImg src={RandomImg} />
        </S.SelectColorRandomBtn>
      </S.SelectColorHeader>

      <S.SelectColorInputContainer>
        <S.SelectColorPreview value={value} />
        <S.SelectColorInput
          onBlur={handleBlur}
          value={value}
          onChange={onChange}
          maxLength={7}
        />
      </S.SelectColorInputContainer>
    </S.SelectColorContainer>
  );
};
export default SelectColor;
