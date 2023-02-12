import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import Offers from "./pages/Offers";
import ForgotPassword from "./pages/ForgotPassword";
import Header from "./pages/components/Header";

function App() {
  return (
    <>
      <Router>
        <Header/>
          <Routes>
              <Route path = "/" element = {<Home />}></Route>
              <Route path = "/profile" element = {<Profile />}></Route>
              <Route path = "/login" element = {<Login />}></Route>
              <Route path = "/register" element = {<Register />}></Route>
              <Route path = "/forgot-password" element = {<ForgotPassword />}></Route>
              <Route path = "/offers" element = {<Offers />}></Route>
          </Routes>
      </Router>
    </>
  );
}

export default App;
