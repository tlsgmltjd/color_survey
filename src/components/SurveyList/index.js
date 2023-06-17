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
    const currentData = await getData(
      offset,
      LIMIT,
      selectdFilter ? selectdFilter : null
    );
    // setDataCount(currentData.data.count);

    if (offset === 0) setData(currentData.data.results);
    else setData((prevItems) => [...prevItems, ...currentData.data.results]);

    setHasNext(currentData.data.count > offset + LIMIT);
    console.log(currentData.data);
  }

  useEffect(() => {
    doFetch();
  }, [offset, selectdFilter]);

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
      {hasNext && (
        <S.MoreBtn
          hasnext={hasNext}
          disabled={!hasNext}
          onClick={handleMoreDataClick}
        >
          🔽
        </S.MoreBtn>
      )}
    </S.SurveyListContainer>
  );
}

export default SurveyList;
