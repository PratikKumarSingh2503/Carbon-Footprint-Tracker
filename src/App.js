import Navbar from "./components/NavBar/navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/home";
import Workflow from "./pages/Workflow/workflow";
import Tracker from "./pages/Tracker/tracker";
import Login from "./pages/Login/login";
import Register from "./pages/Register/register";


function App() {
  const user = false;

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}>Home</Route>
          <Route exact path="/workflow" element={<Workflow />}>Workflow</Route>
          <Route exact path="/tracker" element={<Tracker />}>Tracker</Route>
          <Route path="/login" element={user ? <Home /> : <Login />}>Login</Route>
          <Route path="/register" element={user ? <Home /> : <Register />}>Register</Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;