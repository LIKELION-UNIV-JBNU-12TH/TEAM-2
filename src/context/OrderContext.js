// src/context/OrderContext.js
import React, { createContext, useState, useContext } from 'react';

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState([
    {
      id: 1,
      orderDate: '2024-05-23',
      productName: 'Airbrush Graphic T-Shirt [Off White]',
      amount: '34,000',
      status: '배송완료',
      imageUrl: 'https://example.com/t-shirt.jpg',
      customerName: '홍길동',
      phone: '010-1234-5678',
      email: 'hong@example.com',
      address: '전주시 덕진구 금암동'
    },
    // Add more orders if needed
  ]);

  return (
    <OrderContext.Provider value={{ orders, setOrders }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrders = () => {
  return useContext(OrderContext);
};
