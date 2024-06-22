import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MyPage from './pages/MyPage';
import OrderHistory from './pages/OrderHistory';
import OrderDetail from './pages/OrderDetail';
import CancelReturn from './pages/CancelReturn';
import EditProfile from './pages/EditProfile';
import { OrderProvider } from './context/OrderContext';
import './styles/App.css';




const App = () => {
  return (
    <OrderProvider>
    <Router>
      
      <div className="App">
        <Header />
        <Sidebar />


          <Routes>
            <Route path="/" element={<Navigate to="/mypage" />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/order-history" element={<OrderHistory />} />
            <Route path="/order-detail" element={<OrderDetail />} />
            <Route path="/cancel-return" element={<CancelReturn />} />
            <Route path="/edit-profile" element={<EditProfile />} />
          </Routes>
       </div>
      
    </Router>
    </OrderProvider>
  );
};

export default App;







