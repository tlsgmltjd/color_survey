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
        <S.SelectColorInput value={value} onChange={onChange} maxLength={7} />
      </S.SelectColorInputContainer>
    </S.SelectColorContainer>
  );
};
export default SelectColor;
