import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./pages/Registration";
import PersonalInformation from "./pages/PersonalInformation";
import Address from "./pages/Address";
import AddAddress from "./pages/AddAddress";
import SuccessPage from "./pages/SuccessPage";
import LogIn from "./pages/LogIn";
import Dashboard from "./pages/dashboard/Dashboard";
import ProtectedRoutes from "./components/ProtectedRoutes";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Registration />}>
          <Route
            path="personal-information"
            element={<PersonalInformation />}
          />
          <Route path="address" element={<Address />} />
          <Route path="add-address" element={<AddAddress />} />
          <Route path="success" element={<SuccessPage />} />
        </Route>

        <Route path="/login" element={<LogIn />} />

        {/* Move dashboard to root-level */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoutes>
              <Dashboard />
            </ProtectedRoutes>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
