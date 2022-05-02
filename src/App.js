import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BmiPage from "./pages/BmiPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import ShowProvider from "./providers/ShowProvider";
import UserProvider from "./providers/UserProvider";

function App() {
  return (
    <Router>
      <UserProvider>
        <ShowProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/bmi" element={<BmiPage />} />
            <Route path="/user" element={<SignUpPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </ShowProvider>
      </UserProvider>
    </Router>
  );
}

export default App;
