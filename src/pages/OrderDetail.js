// src/pages/OrderDetail.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/OrderDetail.css';

const OrderDetail = () => {
  const location = useLocation();
  const { order } = location.state || {};

  if (!order) {
    return <div>주문 정보를 불러올 수 없습니다.</div>;
  }

  return (
    <div className="order-detail">
      <h2>주문 상품 정보</h2>
      <table>
        <thead>
          <tr>
            <th>주문일</th>
            <th>상품 내역</th>
            <th>결제 금액</th>
            <th>진행 상태</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{order.orderDate}</td>
            <td>
              <img src={order.imageUrl} alt={order.productName} />
              {order.productName}
            </td>
            <td>{order.amount}</td>
            <td>{order.status}</td>
          </tr>
        </tbody>
      </table>
      <h2>주문자 정보</h2>
      <table>
        <tbody>
          <tr>
            <th>주문자</th>
            <td>{order.customerName}</td>
          </tr>
          <tr>
            <th>휴대전화</th>
            <td>{order.phone}</td>
          </tr>
          <tr>
            <th>이메일</th>
            <td>{order.email}</td>
          </tr>
          <tr>
            <th>주소</th>
            <td>{order.address}</td>
          </tr>
        </tbody>
      </table>
      <h2>결제 정보</h2>
      <table>
        <tbody>
          <tr>
            <th>결제 금액</th>
            <td>{order.amount}원</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OrderDetail;

