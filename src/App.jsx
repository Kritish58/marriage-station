import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/public/Homepage";
import Reg2 from "./pages/public/registration/completeRegistration/Reg2";
import Reg3 from "./pages/public/registration/completeRegistration/Reg3";
import Reg4 from "./pages/public/registration/completeRegistration/Reg4";
import Reg5 from "./pages/public/registration/completeRegistration/Reg5";
import Reg6 from "./pages/public/registration/completeRegistration/Reg6";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/completeRegistration" element={<Reg2 />} />
        <Route path="/completeRegistration3" element={<Reg3 />} />
        <Route path="/completeRegistration4" element={<Reg4 />} />
        <Route path="/completeRegistration5" element={<Reg5 />} />
        <Route path="/completeRegistration6" element={<Reg6 />} />
        <Route path="*" element={<>Not available</>} />
      </Routes>
    </Router>
  );
};

export default App;
