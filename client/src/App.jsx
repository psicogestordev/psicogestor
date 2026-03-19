import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './pages/Login'; 
import Home from './pages/Home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home />} />
        
        <Route path="/login" element={<Login />} />
        
        {/* Vamo adicionar mais rotas conforme os cards avançarem glr */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;