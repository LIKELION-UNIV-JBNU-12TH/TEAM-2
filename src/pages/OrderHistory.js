// src/pages/OrderHistory.js
import React from 'react';
import { useOrders } from '../context/OrderContext';
import '../styles/OrderHistory.css';

const OrderHistory = ({ onOrderClick }) => {
  const { orders } = useOrders();

  return (
    <div className="order-history">
      <h2>최근 주문</h2>
      <table className="order-table">
        <thead>
          <tr>
            <th>주문일</th>
            <th>상품 내역</th>
            <th>결제 금액</th>
            <th>진행 상태</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id} onClick={() => onOrderClick(order)}>
              <td>{order.orderDate}</td>
              <td>
                <img src={order.imageUrl} alt={order.productName} />
                {order.productName}
              </td>
              <td>{order.amount}</td>
              <td>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderHistory;








