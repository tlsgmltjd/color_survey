import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import * as P from "./PageContainer";
import { useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [selectdFilter, setSelectdFilter] = useState();

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
