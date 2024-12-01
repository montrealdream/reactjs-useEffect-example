/**
 * @description Sử dụng useEffect có dependencies 
*/

import { useState, useEffect } from "react";

export const UseEffectHasDependencies = () => {
    // khởi tạo useSate
    const [count1, setCount1] = useState(0);

    // useSate Counter 1 
    const handleCounter1Up = () => {
        setCount1(count1 => count1 + 1);
        console.log(`Nhấn counter 1: Render lại lần ${count1 + 1}`);
    }

    // useEffect Counter 1
    useEffect(() => {
        console.log(`useEffect: Render lại lần ${count1}`);
    }, [count1]);
    

    return (
        <>
            <h1>Sử dụng useEffect có dependencies</h1>

            <h1>Count 1 (Có sử dụng dependencies): {count1} </h1>
            <button
                onClick={handleCounter1Up}
            >
                Nhấn Counter Tăng lên 1
            </button>
        </>
    );
}