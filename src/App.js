import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./components/RegisterComponent";
import LoginComponent from "./components/LoginComponent";
import ErrorPage from "./components/ErrorPage";
import Feed from "./components/feed.js";
import Post from "./components/post.js";
import Header from "./components/header.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" />
        <Route path="/feed" element={<Feed />} />
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
