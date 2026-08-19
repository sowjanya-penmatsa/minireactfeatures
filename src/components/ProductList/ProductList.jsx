import ProductCard from "./ProductCard";
import './ProductList.css'

const ProductList=()=>{
    const products=[
        {id: 1, name: "Laptop", price: 60000, category: "Electronics", rating: 4.5},
         {id: 2, name: "TV", price: 50000, category: "Electronics", rating: 4.4},
          {id: 3, name: "Phone", price: 80000, category: "Electronics", rating: 4.6},
           {id: 4, name: "Shoes", price: 3000, category: "Fashion", rating: 4.5},
            {id: 5, name: "Earrings", price: 1000, category: "Jwellery"},
            {id: 6, name: "Watch", price: 2000, category: "Accessories", rating: 4.2}
    ]
    return products.length===0 ?  <p className="empty-message">No products available</p> :(
        <div className="productlist">
            <h1>product list</h1>
            <div className="product">
                 {
                products.map((product)=>{
                    return <ProductCard key={product.id} productName={product.name} productPrice={product.price} productCategory={product.category} productRating={product.rating}/>
                })
            }
            </div>
           
        </div>
    )
}
export default ProductList;