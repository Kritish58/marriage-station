import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Policies, Terms } from "./pages";
import { UserRoutes } from "./routes";
import { useEffect } from "react";
import Constants from "./constants";
import { authFailure, authPending, authSuccess } from "./redux/reducers";
import { useDispatch } from "react-redux";
import { ImageVerification } from "./routes/ImageVerification";
import { AuthProtection } from "./routes/Protected";
import { CompleteProfile } from "./routes/CompleteProfile";
import API from "./api";
import jwtDecode from "jwt-decode";
import { useSelector } from "react-redux";
import { Spinner } from "./components";
import { PartnerPreferenceVerification } from "./routes/PartnerPreferences";

const App = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.authState);
  useEffect(() => {
    const tryLogIn = async (session) => {
      let data = jwtDecode(session?.token);
      try {
        await API.get(
          `${Constants.apiEndpoint.user.getSelf}/${data.payload.user.user_id}`
        );
        dispatch(authSuccess(session));
      } catch (err) {
        dispatch(authFailure());
      }
    };
    let session = JSON.parse(
      localStorage.getItem(Constants.keys.session) || "{}"
    );
    if (session?.token) {
      dispatch(authPending());
      tryLogIn(session);
    }
  }, [dispatch]);
  return isLoading ? (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ width: "100vw", height: "100vh" }}
    >
      <Spinner />
    </div>
  ) : (
    <Router>
      <ToastContainer />
      <Routes>
        <Route
          path="/*"
          element={
            <AuthProtection>
              <PartnerPreferenceVerification>
                <ImageVerification />
                <CompleteProfile>
                  <UserRoutes />
                </CompleteProfile>
              </PartnerPreferenceVerification>
            </AuthProtection>
          }
        />
        <Route exact path="/privacy-policies" element={<Policies />} />
        <Route exact path="/terms-conditions" element={<Terms />} />
        <Route path="*" element={<h2>Oh oh!</h2>} />
      </Routes>
    </Router>
  );
};

export default App;
