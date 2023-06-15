import { useEffect, useState } from "react";
import { getData } from "../../Request/Request";
import * as S from "./style";
import * as C from "../../components";

function SurveyList() {
  const [dataCount, setDataCount] = useState(0);
  const [data, setData] = useState([]);
  const [offset, setOffset] = useState(0);
  const [hasNext, setHasNext] = useState(true);

  const LIMIT = 20;

  async function doFetch() {
    const currentData = await getData(offset, LIMIT);
    setDataCount(currentData.data.count);

    if (offset === 0) setData(currentData.data.results);
    else setData((prevItems) => [...prevItems, ...currentData.data.results]);

    setHasNext(currentData.data.count > offset + LIMIT);
    console.log(currentData.data);
  }

  useEffect(() => {
    doFetch();
  }, [offset]);

  const handleMoreDataClick = () => {
    setOffset(offset + LIMIT);
  };

  return (
    <S.SurveyListContainer>
      {data.map((item) => (
        <C.SurveyItem key={item.id} item={item}></C.SurveyItem>
      ))}
      <S.MoreBtn
        hasnext={hasNext}
        disabled={!hasNext}
        onClick={handleMoreDataClick}
      >
        {hasNext ? "더보기" : "더 없어요 ㅠ"}
      </S.MoreBtn>
    </S.SurveyListContainer>
  );
}

export default SurveyList;
