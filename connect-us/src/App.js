import './App.css';
import ResetPassword from './layout/AuthLayout/ResetPassword';
import SignUp from './layout/AuthLayout/SignUp';
import Login from './layout/AuthLayout/Login';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="h-screen flex items-center justify-center font-nunito">
      <Routes>
        <Route path= '/' element={<SignUp />} />
        <Route path= '/ResetPassword' element={<ResetPassword />} />
        <Route path='/Login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
