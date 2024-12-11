import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import MainPage from "./pages/mainpage/mainPage"

function routerSystem() {
  return (
    <Routes>
        <Route path="/home" element={<MainPage />} />
        <Route path="/*" element={pass}/>
    </Routes>
  )
}

export default routerSystem