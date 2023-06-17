import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import * as P from "./PageContainer";
import { useEffect, useState } from "react";
import { getData } from "./Request/Request";

function App() {
  const [data, setData] = useState([]);
  const [sortedData, setSortedData] = useState([]);
  const [selectdFilter, setSelectdFilter] = useState();

  // 더 빨리 할 일 : FilterBox의 X를 눌렀을 때 data들이 다시 돌아오게 해야함
  // -> selectdFilter 값이 없어졌을 때, 데이터를 다시 불러와서 data state에 저장..?

  // 할일 : 전역상태관리하기 - props 드릴링이 시작되었다.. data, selectdFilter state 관리하기

  useEffect(() => {
    if (selectdFilter) {
      let copyData = [...data];
      const sortedData = copyData.filter((item) => {
        return item.mbti === selectdFilter;
      });
      setSortedData(sortedData);
    } else {
      //
    }
  }, [selectdFilter]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <P.MainPage
                selectdFilter={selectdFilter}
                setSelectdFilter={setSelectdFilter}
                data={data}
                setData={setData}
                sortedData={sortedData}
              />
            }
          />
          <Route
            path="/select"
            element={<P.SelectPage data={data} setData={setData} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
