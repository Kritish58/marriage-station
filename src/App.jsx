import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Policies, Terms } from "./pages";
import { ProtectedRoutes, UserRoutes } from "./routes";
import { MobileVerification } from "./pages/public/verification/Mobile";
import { ResetPassword } from "./pages/ResetPassword";

const App = () => {
  return (
    <Router>
      <ToastContainer />
      <Routes>
        <Route
          path="/*"
          element={
            <ProtectedRoutes>
              <UserRoutes />
            </ProtectedRoutes>
          }
        />
        <Route exact path="/verifyOTP" element={<MobileVerification />} />
        <Route exact path="/privacy-policies" element={<Policies />} />
        <Route exact path="/terms-conditions" element={<Terms />} />
        <Route path="*" element={<>Not available</>} />
      </Routes>
    </Router>
  );
};

export default App;
