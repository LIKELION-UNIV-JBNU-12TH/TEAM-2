import productList from './exproductList.jsx';

export default function SearchProduct({searchName, toDetailPage}){
    const filteredProducts = productList.filter(product => product.name.includes(searchName));
    const IsSuccessSearch = filteredProducts.length > 0;
    return(
        <div className="ProductMain">
            <div className="categoryTitleWrap">
                <div className="categoryTitle">검색 결과</div>
            </div>
            <div className="productsWrap">
            
                {IsSuccessSearch ? (
                    filteredProducts.map((product, index) => (
                        <div key={index} className="productItem">
                            <button className="navigate2Detail" onClick={() => toDetailPage(product)}>
                                <img className="productPgItemImg" src={product.image} alt={product.name} />
                            </button>
                            <div className="productPgName">{product.name}</div>
                            <div className="productPgPrice">{product.price}원</div>
                        </div>
                    ))
                ) : (
                    <div className="NoResult">일치하는 상품이 없습니다.</div>
                )}
            </div>
        </div>    
    );
}