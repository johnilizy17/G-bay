import logo from './logo.svg';
import './App.css';
import SignIn from './authentication/SignIn';
import ForgottenPassword from './authentication/ForgottenPassword';
import { Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="Forgotten_Password" element={<ForgottenPassword />} />
      </Routes>
    </div>
  );
}

export default App;
