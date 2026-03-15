import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './pages/Login'; 
import Dashboard from './pages/Dashboard'
import Navbar from './components/Navbar';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Header />
      <Routes>
        <Route path="/" element={ <Dashboard />} />
        
        <Route path="/login" element={<Login />} />
        
        {/* Vamo adicionar mais rotas conforme os cards avançarem glr */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;