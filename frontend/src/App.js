import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminLogin from './pages/admin/AdminLogin';

function App() {
  return (
    
    <BrowserRouter>
    <Routes>
      <Route path='/admin/login' element={<AdminLogin/>} />
      <Route path='/'/>
      <Route>
        <Route>

      </Route>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
