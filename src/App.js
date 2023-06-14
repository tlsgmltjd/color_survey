import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import * as P from "./PageContainer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<P.MainPage />} />
          <Route path="/select" element={<P.SelectPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
