import './productPage.css';
import productList from './exproductList.jsx';


export default function ProductListPage({ activeButton, toDetailPage }){


    return(
        <div className="ProductMain">
            <div className="categoryTitleWrap">
                {activeButton && <div className="categoryTitle">{activeButton}</div>}
            </div>
            <div className="productsWrap">
            {activeButton === "All" ?
                productList.map((product, index) => (
                    <div key={index} className="productItem">
                        <button className="navigate2Detail"
                            onClick={()=>toDetailPage(product)}>
                            <img className="productPgItemImg" src={product.image} alt={product.name} />
                        </button>
                        <div className="productPgName">{product.name}</div>
                        <div className="productPgPrice">{product.price}원</div>
                    </div>
                )) :
                productList.map((product, index) => (
                    product.category === activeButton && (
                        <div key={index} className="productItem">
                            <button className="navigate2Detail"
                                onClick={()=>toDetailPage(product)}>
                                <img className="productPgItemImg" src={product.image} alt={product.name} />
                            </button>
                            <div className="productPgName">{product.name}</div>
                            <div className="productPgPrice">{product.price}원</div>
                        </div>
                    )
                ))
            }
            </div>
        </div>    
    );
}