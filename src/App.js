import './App.css';
import SignIn from './authentication/SignIn';
import Home from './LandingPage/HomePage';
import ForgottenPassword from './authentication/ForgottenPassword';
import { Routes, Route} from "react-router-dom";
import Blog from './Blog/Blog';
import Notfound from './NotFound/NotFound';
import AboutUs from './about/AboutUs';
import FAQ from './FAQ/FAQ';
import Dashboard from './DashBoard/Dashboard';
import View from './Blog/BlogView';
import Payment from './DashBoard/Payment';
import Test from './DashBoard/Logo'

function App() {
  return (
    <div className="App">
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signIn" element={<SignIn />} />   
        <Route path="/forgotten_password" element={<ForgottenPassword />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<Notfound />} />
        <Route path="/about_us" element={<AboutUs />} />
        <Route path="/FQA" element={<FAQ />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/view" element={<View />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </div>
  );
}

export default App;
