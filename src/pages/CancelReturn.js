// src/components/CancelReturn.js
import React from 'react';
import '../styles/CancelReturn.css';

const CancelReturn = () => {
  const requests = [
    { date: '2024-05-23', title: '반품 요청', receivedDate: '2024-05-23', status: '답변 대기' },
    { date: '2024-05-23', title: '교환 요청', receivedDate: '2024-05-23', status: '답변 완료' }
  ];

  return (
    <div className="cancel-return">
      <h1>취소/교환/반품 내역</h1>
      <table>
        <thead>
          <tr>
            <th>주문일</th>
            <th>접수 제목</th>
            <th>접수일</th>
            <th>진행상태</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((request, index) => (
            <tr key={index}>
              <td>{request.date}</td>
              <td>{request.title}</td>
              <td>{request.receivedDate}</td>
              <td>{request.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CancelReturn;


