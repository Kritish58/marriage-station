import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Policies, Terms } from "./pages";
import { UserRoutes } from "./routes";
import { useEffect } from "react";
import Constants from "./constants";
import { authSuccess } from "./redux/reducers";
import { useDispatch } from "react-redux";
import { MobileVerification } from "./routes/MobileVerification";
import { ImageVerification } from "./routes/ImageVerification";
import { AuthProtection } from "./routes/Protected";
import { CompleteProfile } from "./routes/CompleteProfile";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    let session = JSON.parse(
      localStorage.getItem(Constants.keys.session) || "{}"
    );
    if (session?.token) {
      dispatch(authSuccess(session));
    }
  }, [dispatch]);
  return (
    <Router>
      <ToastContainer />
      <Routes>
        <Route
          path="/*"
          element={
            <AuthProtection>
              <ImageVerification>
                <MobileVerification />
                {/* <CompleteProfile> */}
                <UserRoutes />
                {/* </CompleteProfile> */}
              </ImageVerification>
            </AuthProtection>
          }
        />

        <Route exact path="/privacy-policies" element={<Policies />} />
        <Route exact path="/terms-conditions" element={<Terms />} />
        <Route path="*" element={<h2>Not available</h2>} />
      </Routes>
    </Router>
  );
};

export default App;
