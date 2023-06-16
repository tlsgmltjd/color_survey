import { useEffect, useState } from "react";
import { getData } from "../../Request/Request";
import * as S from "./style";
import * as C from "../../components";

function SurveyList({ data, setData, selectdFilter, setSelectdFilter }) {
  // const [dataCount, setDataCount] = useState(0);
  const [offset, setOffset] = useState(0);
  const [hasNext, setHasNext] = useState(true);

  const LIMIT = 20;

  async function doFetch() {
    const currentData = await getData(offset, LIMIT);
    // setDataCount(currentData.data.count);

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
        <C.SurveyItem
          key={item.id}
          item={item}
          selectdFilter={selectdFilter}
          setSelectdFilter={setSelectdFilter}
        ></C.SurveyItem>
      ))}
      {!selectdFilter && hasNext ? (
        // Filter가 적용되었다면 더보기 버튼이 보이지 않게 조건부 렌더링!
        <S.MoreBtn
          hasnext={hasNext}
          disabled={!hasNext}
          onClick={handleMoreDataClick}
        >
          🔽
        </S.MoreBtn>
      ) : null}
    </S.SurveyListContainer>
  );
}

export default SurveyList;
