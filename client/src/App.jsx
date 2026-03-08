import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './pages/Login'; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Dashboard (Em breve)</h1>} />
        
        <Route path="/login" element={<Login />} />
        
        {/* Vamo adicionar mais rotas conforme os cards avançarem glr */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;