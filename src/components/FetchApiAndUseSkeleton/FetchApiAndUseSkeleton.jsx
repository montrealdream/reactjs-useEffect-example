/**
 * @description Sử dụng useEffect dependencies rỗng fetch api và dùng skeleton làm khung xương khi render
*/

import { BoxTitle } from "../BoxTitle/BoxTitle";
import { Products } from "../Products/Products";
import { ProductsSkeleton } from "../Products/ProductsSkeleton";

import { useState, useEffect } from "react";

const TIMEOUT = 1000; // 1s
const limit = 10; // dùng để giới hạn sản phẩm lấy ra

export const FetchApiAndUseSkeleton = () => {
    // useState khởi tạo dữ liệu sản phẩm là null
    const [products, setProducts] = useState(null);

    // lấy dữ liệu từ dummy json dùng useEffect dependencies rỗng
    useEffect(() => {
        setTimeout(() => {
            fetch(`https://dummyjson.com/products?limit=${limit}`)
                .then(data => data.json())
                .then(data => {
                    setProducts(data.products);
                });
        } ,TIMEOUT * 5);
    }, []);

    // render giao diện
    return (
        <>
           <BoxTitle title={'usEffect FetchApi Skeleton'} />

            <div className="container">
                {   products !== null 
                    ? < Products products={products} />  
                    : <ProductsSkeleton />
                }
            </div>
        </>
    );
}