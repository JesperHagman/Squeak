import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./components/RegisterComponent";
import LoginComponent from "./components/LoginComponent";
import ErrorPage from "./components/ErrorPage";
import Feed from "./components/feedComponent/feed";
import Account from "./pages/account/account";
import Login from "./components/loginTest";
import { useContext } from "react";
import { Context } from "./context/context";

function App() {
  //const user = false;
  const {user} = useContext(Context)
  return (
    <Router>
      <Routes>
        <Route path="/" />
        <Route path="/account" element={user ? <Account />: <Register/>} />
        <Route path="/logintest" element={user ? <Feed /> : <Login />} />
        <Route path="/feed" element={user ? <Feed /> : <Register/>} />
        <Route path="/login" element={user ? <Feed/>:<LoginComponent />} />
        <Route path="/register" element={user ? <Feed/>: <Register />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
