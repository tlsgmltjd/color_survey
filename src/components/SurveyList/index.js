import { useEffect, useState } from "react";
import { getData } from "../../Request/Request";
import * as S from "./style";

function SurveyList() {
  const [dataCount, setDataCount] = useState(0);
  const [data, setDate] = useState([]);
  const [offset, setOffset] = useState(0);
  const [hasNext, setHasNext] = useState(true);

  const LIMIT = 20;

  async function doFetch() {
    const currentData = await getData(offset, LIMIT);
    setDataCount(currentData.data.count);

    if (offset === 0) setDate(currentData.data.results);
    else setDate((prevItems) => [...prevItems, ...currentData.data.results]);

    console.log(currentData.data);
  }

  useEffect(() => {
    doFetch();
  }, [offset]);

  const handleMoreDataClick = () => {
    setOffset(offset + LIMIT);
  };

  // 페이지네이션 마무리하기

  return (
    <S.SurveyList>
      {data.map((item) => (
        <li key={item.id}>{item.mbti}</li>
      ))}
      <S.MoreBtn
        disabled={dataCount < offset + LIMIT}
        onClick={handleMoreDataClick}
      >
        더보기
      </S.MoreBtn>
    </S.SurveyList>
  );
}

export default SurveyList;
