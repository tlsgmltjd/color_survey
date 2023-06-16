import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import * as P from "./PageContainer";
import { useState } from "react";

function App() {
  const [data, setData] = useState([]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<P.MainPage data={data} setData={setData} />}
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
