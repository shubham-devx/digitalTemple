import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Temple from "./pages/Temple";
import BackgroundMusic from "./components/BackgroundMusic";

function App() {

  return (
    <BrowserRouter>

      {/* background music */}
      <BackgroundMusic />

      {/* floating diyas background */}
      <div className="diya-background">
        <span>🪔</span>
        <span>🪔</span>
        <span>🪔</span>
        <span>🪔</span>
        <span>🪔</span>
        <span>🪔</span>
      </div>

      {/* routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/temple/:name" element={<Temple />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;