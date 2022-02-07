import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Policies, Terms } from "./pages";
import { ProtectedRoutes, UserRoutes } from "./routes";
import { useEffect } from "react";
import Constants from "./constants";
import { authSuccess } from "./redux/reducers";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch("");
  useEffect(() => {
    let session = JSON.parse(
      localStorage.getItem(Constants.keys.session) || "{}"
    );
    if (session?.token && session?.user) {
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
            <ProtectedRoutes>
              <UserRoutes />
            </ProtectedRoutes>
          }
        />
        <Route exact path="/privacy-policies" element={<Policies />} />
        <Route exact path="/terms-conditions" element={<Terms />} />
        <Route path="*" element={<>Not available</>} />
      </Routes>
    </Router>
  );
};

export default App;
