import React, {useState} from "react";
import './productPage.css';
import ProductListPage from './ProductListPage';
import DetailProduct from './DetailProduct';
import SearchProduct from './SearchProduct';


export default function ProductMain(){
    const [activeButton, setActiveButton] = useState(null);
    const [selectedProduct, setSelectedProduct]=useState(null);
    const [isLogin,setIsLogin]=useState(false);
    const [searchName, setSearchName]=useState('');
    const [isSearchValid, setIsSearchValid]=useState(false);
    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
        setSelectedProduct(null);
        setIsSearchValid(false);
        setSearchName('');
    };
    const handleDetail=(product)=>{
        setSelectedProduct(product);
        setActiveButton(null);
        setIsSearchValid(false);
        setSearchName('');
    }
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };
    const handleSearch=()=>{
        setIsSearchValid(true);
        setActiveButton(null);
        setSelectedProduct(null);
    }
    
    return(
        <><div className="Top">
            <div className="Top1Line">
                <button className="logoBtn">Again</button>
                <div className="searchWrap">
                    <input className="searchInput"
                            placeholder='상품을 검색해보세요'
                            value={searchName}
                            type="text"
                            onChange={(e) => setSearchName(e.target.value)}
                            onKeyDown={handleKeyPress}
                            >
                    </input>
                    <button className="searchBtn"
                            onClick={handleSearch}
                            >
                            <img className="searchIcon" src="/icon/searchIcon.png" alt="searchIcon" />
                            </button>
                    
                </div>
                <button className="saleBtn">
                    <img className="IconImg" src="/icon/shoppingBagIcon.png" alt="shoppingBagIcon"></img>
                    판매하기
                </button>
                <button className="cartBtn">
                    <img className="IconImg" src="/icon/shoppingCartIcon.png" alt="shoppingCartIcon"></img>
                    장바구니
                </button>
                {
                    isLogin ? (
                        <button className="myPageBtn">
                            <img className="IconImg" src="/icon/MypgIcon.png" alt="myPgIcon"></img>
                            마이페이지
                        </button>
                    ) : (
                        <button className="myPageBtn" onClick={() => setIsLogin(true)}>
                            <img className="IconImg" src="/icon/MypgIcon.png" alt="myPgIcon"></img>
                            로그인
                        </button>
                    )
                }
                

            </div>
            <div className="Top2Line">
                <div className="MenuBtnWrap">
                    <button
                        className={`cloth AllBtn ${activeButton === "All" ? "active" : ""}`}
                        onClick={() => handleButtonClick("All")}
                    >
                        All
                    </button>
                    <button
                        className={`cloth TopBtn ${activeButton === "Top" ? "active" : ""}`}
                        onClick={() => handleButtonClick("Top")}
                    >
                        Top
                    </button>
                    <button
                        className={`cloth BottonBtn ${activeButton === "Bottom" ? "active" : ""}`}
                        onClick={() => handleButtonClick("Bottom")}
                    >
                        Bottom
                    </button>
                    <button
                        className={`cloth OuterBtn ${activeButton === "Outer" ? "active" : ""}`}
                        onClick={() => handleButtonClick("Outer")}
                    >
                        Outer
                    </button>
                    <button
                        className={`cloth SkirtBtn ${activeButton === "Skirt/Ops" ? "active" : ""}`}
                        onClick={() => handleButtonClick("Skirt/Ops")}
                    >
                        Skirt/Ops
                    </button>
                    <button
                        className={`cloth EtcBtn ${activeButton === "Etc" ? "active" : ""}`}
                        onClick={() => handleButtonClick("Etc")}
                    >
                        Etc
                    </button>
                </div>
            </div>
        </div>
        <div className="Under">
            {selectedProduct ? (
                <DetailProduct product={selectedProduct} />
            ) : isSearchValid ? (
                <SearchProduct searchName={searchName} handleDetail={handleDetail} toDetailPage={handleDetail} />
            ) : (
                <ProductListPage activeButton={activeButton} handleButtonClick={handleButtonClick} toDetailPage={handleDetail} />
            )}
       </div>
        
        </>


    );
}