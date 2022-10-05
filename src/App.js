import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/register/Register";
import ErrorPage from "./pages/404/ErrorPage";
import Feed from "./pages/feed/feed";
import Account from "./pages/account/account";
import { useContext } from "react";
import { Context } from "./context/context";
import Home from "./pages/home/Home";
import Squeaks from "./pages/mySqueaks/mySqueaks";
import UsersProfile from "./pages/usersProfile/UsersProfile";
import Profile from "./pages/profile/profile";

function App() {
  //const user = true;
  const { user } = useContext(Context);
  return (
    <Router>
      <Routes>
        <Route path="/" element={user ? <Feed /> : <Home />} />
        <Route path="/login" element={user ? <Feed /> : <Home />} />
        <Route path="/register" element={user ? <Feed /> : <Register />} />
        <Route path="/feed" element={user ? <Feed /> : <Home />} />
        <Route path="/account" element={user ? <Account /> : <Home />} />
        <Route path="/squeaks" element={user ? <Squeaks /> : <Home />} />
        <Route path="/profil" element={user ? <Squeaks /> : <Home />} />
        <Route
          path="/usersProfile"
          element={user ? <UsersProfile /> : <Home />}
        />
        <Route path="/profile" element={user ? <Profile /> : <Home />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
