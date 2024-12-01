/**
 * @description Sử dụng useEffect có dependencies 
*/

import { useState, useEffect } from "react";

export const UseEffectEmptyDependenciesFetchApi = () => {
    // useEffect
    useEffect(() => {
        // lấy thẻ danh sách sản phẩm
        const productList = document.querySelector('.products-list');
        
        // lấy dữ liệu API
        fetch(`https://dummyjson.com/products/1`)
            .then(response => response.json())
            .then( data => console.log(data))
    }, []);
    

    return (
        <>
            <h1>Sử dụng useEffect dependencies rỗng để Fetch Api</h1>

            <div className="products-list">

            </div>
        </>
    );
}