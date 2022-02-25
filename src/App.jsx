import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Policies, Terms } from "./pages";
import { UserRoutes } from "./routes";
import { useEffect } from "react";
import Constants from "./constants";
import { authFailure, authPending, authSuccess } from "./redux/reducers";
import { useDispatch } from "react-redux";
import { MobileVerification } from "./routes/MobileVerification";
import { ImageVerification } from "./routes/ImageVerification";
import { AuthProtection } from "./routes/Protected";
import { CompleteProfile } from "./routes/CompleteProfile";
import API from "./api";
import jwtDecode from "jwt-decode";
import { useSelector } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.authState);
  useEffect(() => {
    let session = JSON.parse(
      localStorage.getItem(Constants.keys.session) || "{}"
    );
    const tryLogIn = async (token) => {
      let data = jwtDecode(token);
      console.log(data.payload.user);
      try {
        let res = await API.get(
          `${Constants.apiEndpoint.user.getSelf}/${data.payload.user.user_id}`
        );
        dispatch(authSuccess(session));
      } catch (err) {
        dispatch(authFailure());
      }
    };
    if (session?.token) {
      dispatch(authPending());
      tryLogIn(session?.token);
    }
  }, [dispatch]);
  if (isLoading) return <h1>Loading...</h1>;
  return (
    <Router>
      <ToastContainer />
      <Routes>
        <Route
          path="/*"
          element={
            <AuthProtection>
              <ImageVerification>
                {/* <MobileVerification /> */}
                <CompleteProfile>
                  <UserRoutes />
                </CompleteProfile>
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
