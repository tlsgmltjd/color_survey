import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import * as P from "./PageContainer";
import { useEffect, useState } from "react";
import { getData } from "./Request/Request";

function App() {
  const [data, setData] = useState([]);
  const [selectdFilter, setSelectdFilter] = useState();

  // 더 빨리 할 일 : FilterBox의 X를 눌렀을 때 data들이 다시 돌아오게 해야함
  // -> selectdFilter 값이 없어졌을 때, 데이터를 다시 불러와서 data state에 저장..?

  // sortedData 라는 state를 만들어서 filter가 선택되면 sortedData state에
  // filtered 된 데이터 저장, 그리고 List로 출력될 때 filter가 선택되었다면
  // sortedData를 출력시키게 함

  // 이런 망할 API 요청에 쿼리로 mbti를 보내면 자동으로 정렬해서 준답니다..
  // 더 쉽게 해결했다..

  // 할일 : 전역상태관리하기 - props 드릴링이 시작되었다.. data, selectdFilter state 관리하기

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
