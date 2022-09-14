import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./components/RegisterComponent";
import LoginComponent from "./components/LoginComponent";
import ErrorPage from "./components/ErrorPage";
import Feed from "./components/feedComponent/feed";
import Account from "./pages/account/account";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" />
        <Route path="/account" element={<Account />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
