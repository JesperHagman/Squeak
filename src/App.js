import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/register/RegisterComponent";
import LoginComponent from "./components/LoginComponent";
import ErrorPage from "./components/ErrorPage";
import Feed from "./components/feedComponent/feed";
import Account from "./pages/account/account";
import Login from "./components/loginTest";
import { useContext } from "react";
import { Context } from "./context/context";
import Home from "./pages/home/Home";

function App() {
  //const user = true;
  const { user } = useContext(Context);
  return (
    <Router>
      <Routes>
        <Route path="/" element={user ? <Feed /> : <Home />} />
        <Route path="/account" element={user ? <Account /> : <Home />} />
        <Route path="/logintest" element={user ? <Feed /> : <Home />} />
        <Route path="/feed" element={user ? <Feed /> : <Home />} />
        <Route path="/login" element={user ? <Feed /> : <Home />} />
        <Route path="/register" element={user ? <Feed /> : <Register />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
