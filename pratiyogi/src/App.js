import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/pages/About";
import HomePage from "./components/pages/HomePage";
import NewBatches from "./components/pages/NewBatches";
import AdmitCardPage from "./components/pages/admitCardPage";
function App() {
return (<>
      <Routes>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/admit-card-exams" element={<AdmitCardPage />} />
          <Route path="/newbatches" element={<NewBatches />} />
      </Routes>
      {/* <div>hello</div> */}
    </>
  );
}

export default App;