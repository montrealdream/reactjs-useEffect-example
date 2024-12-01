import { ProductItemSkeleton } from "./ProductItemSkeleton";

export const ProductsSkeleton = (props) => {
    const productsSkeleton = new Array(6).fill("");

    return (
        <>
            <div className="products">
                {productsSkeleton.map(product => <ProductItemSkeleton />)}
            </div>
        </>
    );
}