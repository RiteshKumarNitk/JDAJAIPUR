import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Rob214 from "./pages/Rob214";
import Rob215 from "./pages/Rob215";
import Rob216 from "./pages/Rob216";

function App() {
    return (
        <BrowserRouter>

            <Routes>
                <Route path="/" element={<Navigate to="/robconstruction" />} />
                <Route path="/robconstruction" element={<Rob214 />} />
                <Route path="/saligrampura" element={<Rob215 />} />
                <Route path="/riddhisiddhi" element={<Rob216 />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
