import './ProductCard.css'

const ProductCard=(props)=>{

    const {productName, productPrice, productCategory, productRating} = props;


    return <div className="productcard">
        <h1>{productName}</h1>
        <p>{productPrice}</p>
        <p>{productCategory}</p>
       <p>
    {productRating == null
        ? "Rating: Not available"
        : productRating}
</p>
    </div>
}
export default ProductCard;