import Home from "./pages/home/Home";
import Single from "./pages/home/single/Single";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Write from "./pages/write/Write";
import TopBar from "./components/topbar/TopBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  const currentUser = true;
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route exact path="/" element={<Home/>}>
        </Route>
      </Routes>
      <Routes>
        <Route  path="/Write" element={currentUser ? <Write /> : <Register />}>
        </Route>
      </Routes>
      <Routes>
        <Route path="/Register" element={currentUser ? <Home/> : <Register />}>
        </Route>
      </Routes>
      <Routes>
        <Route path="/login" element={currentUser ? <Home /> : <Login />}>
        </Route>
      </Routes>
      <Routes>
        <Route  path="/Settings" element={currentUser ? <Settings /> : <Register />}>
        </Route>
      </Routes>
      <Routes>
      <Route path="/post/:id" element={<Single/>}>
        </Route>
      </Routes>
      </Router>
  );
}

export default App;
