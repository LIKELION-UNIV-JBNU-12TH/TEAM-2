import React from "react";
import './detailProduct.css';

export default function DetailProduct({ product }) {
    if (!product) {
        return <div>상품 정보를 불러오지 못했습니다.</div>;
    }

    return (
        <div className="detailWrap">
            <div className="DetailProduct">
                <img src={product.image} alt={product.name} className="detailProductImg" />
                <div className="detailProductInfo">
                    <div className="detailProductName">{product.name}</div>
                    <div className="detailProductPrice">{product.price}원</div>
                    <div className="detailButtonWrap">
                        <button className="detailCartBtn">장바구니</button>
                        <button className="detailBuyBtn">구매하기</button>
                        
                    </div>
                </div>
            </div>
            <div className="detailDescriptionWrap">
                <div className="decriptionTitle">
                    상품 상세 설명
                    <hr style={{ backgroundColor: "black", height: "2px", border: "none" }}/>
                </div>
                <div className="detailDescript">
                    {product.descript}
                </div>
            </div>
        </div>
        
    );
}