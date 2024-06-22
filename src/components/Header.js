// src/components/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

export default function Header() {

  const [searchName, setSearchName] = useState('');

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      // handleSearch();
    }
  };

  return (
    <div className="Top">
      <div className="Top1Line">
        <button className="logoBtn">Again</button>
        <div className="searchWrap">
          <input 
            className="searchInput"
            placeholder='상품을 검색해보세요'
            value={searchName}
            type="text"
            onChange={(e) => setSearchName(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          <button className="searchBtn">
            <img className="searchIcon" src="/icon/searchIcon.png" alt="searchIcon" />
          </button>
        </div>
        <button className="cartBtn">
          <img className="IconImg" src="/icon/shoppingCartIcon.png" alt="shoppingCartIcon" />
          장바구니
        </button>
      
          <button className="myPageBtn">
          <Link to="/MyPage">
            <img className="IconImg" src="/icon/MyPgIcon.png" alt="myPgIcon" />
            마이페이지
          </Link>
          </button>

      </div>
      <div className="Top2Line">
        <div className="MenuBtnWrap">
          <button className="cloth AllBtn active">All</button>
          <button className="cloth TopBtn">Top</button>
          <button className="cloth BottomBtn">Bottom</button>
          <button className="cloth OuterBtn">Outer</button>
          <button className="cloth SkirtBtn">Skirt/Ops</button>
          <button className="cloth EtcBtn">Etc</button>
        </div>
      </div>
    </div>
  );
}


