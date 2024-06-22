import React from 'react';
import { useOrders } from '../context/OrderContext';
import '../styles/MyPage.css';  // MyPage 전용 CSS 파일

const MyPage = () => {
  const { orders } = useOrders();

  const handleOrderClick = (order) => {
    // 주문 상세 페이지로 이동하는 로직 추가
    console.log('Order clicked:', order);
  };

  return (
    <div className="my-page">
      <h2>최근 주문</h2>
      <div className="order-history-wrapper">
        <table className="my-order-table">
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
              <tr key={order.id} onClick={() => handleOrderClick(order)}>
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
      <h2>MY HEART</h2>
      <div className="heart-items">
        {/* 찜한 목록 데이터 */}
        <div className="heart-item">
          <img src="path_to_image" alt="Heart item" />
          <span>Heart item</span>
        </div>
        <div className="heart-item">
          <img src="path_to_image" alt="Heart item" />
          <span>Heart item</span>
        </div>
        {/* 반복되는 항목들 */}
      </div>
    </div>
  );
};

export default MyPage;






