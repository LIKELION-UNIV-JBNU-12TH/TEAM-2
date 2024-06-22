import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">

      <div className="sidebar-section">
        <h3>나의 쇼핑정보</h3>
        <NavLink to="/order-history">주문 배송 조회</NavLink>
        <NavLink to="/cancel-return">취소/교환/반품 내역</NavLink>

      </div>
      <div className="sidebar-section">
        <h3>나의 계정정보</h3>
        <NavLink to="/edit-profile">회원정보 수정</NavLink>

      </div>
    </div>
  );
}

export default Sidebar;


