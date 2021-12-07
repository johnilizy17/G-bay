import logo from './logo.svg';
import './App.css';
import SignIn from './authentication/SignIn';
import Home from './LandingPage/HomePage';
import ForgottenPassword from './authentication/ForgottenPassword';
import { Routes, Route} from "react-router-dom";
import Blog from './Blog/Blog';

function App() {
  return (
    <div className="App">
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="SignIn" element={<SignIn />} />
        <Route path="Forgotten_Password" element={<ForgottenPassword />} />
        <Route path="Blog" element={<Blog />} />
      </Routes>
    </div>
  );
}

export default App;
