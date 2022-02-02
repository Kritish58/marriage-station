import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Policies, Terms } from "./pages";
import { ProtectedRoutes, UserRoutes } from "./routes";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/*"
          element={
            <ProtectedRoutes>
              <UserRoutes />
            </ProtectedRoutes>
          }
        />
        <Route exact path="/a-control" element={<div>Admin</div>} />
        <Route exact path="/privacy-policies" element={<Policies />} />
        <Route exact path="/terms-conditions" element={<Terms />} />
        <Route path="*" element={<>Not available</>} />
      </Routes>
    </Router>
  );
};

export default App;
