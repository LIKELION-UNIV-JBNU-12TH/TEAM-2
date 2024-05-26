import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductMain from './ProductPage/ProductMain';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductMain />} />
      </Routes>
    </Router>
  );
}

export default App;
