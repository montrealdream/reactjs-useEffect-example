import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export const ProductItemSkeleton = (props) => {
    const product = props.product;
    console.log(product);
    return (
        <>
            <div className="product-item">
                <Skeleton className="product-image" /> 
                <Skeleton className="product-title" /> 
            </div>
        </>
    );
}