export const ProductItem = (props) => {
    const product = props.product;
    console.log(product);
    return (
        <>
            <div className="product-item">
                <div className="product-image">
                    <img 
                        src={product.images[0]}
                        alt={product.title}
                     />
                </div>

                <div className="product-title">
                    {product.title}
                </div>
            </div>
        </>
    );
}