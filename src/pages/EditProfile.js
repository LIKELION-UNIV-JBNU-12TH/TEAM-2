import React from 'react';
import '../styles/EditProfile.css';

const EditProfile = () => {
  return (
    <div className="edit-profile">
      <h1>회원정보 수정</h1>
      <form>
        <div className="form-group">
          <label>이름</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label>휴대전화</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label>아이디</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label>새 비밀번호</label>
          <input type="password" />
        </div>
        <div className="form-group">
          <label>주소</label>
          <input type="text" />
        </div>
        <button type="submit">저장하기</button>
      </form>
    </div>
  );
};

export default EditProfile;
