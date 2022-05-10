import {useMemo, useState} from "react";
// використовується тоді коли Передайте функцію “створення” та масив залежностей. useMemo повторно обчислить
// мемоізоване значення лише при зміні однієї з залежностей. Така оптимізація допомагає уникнути вартісних обчислень
// при кожному рендері.
// Пам’ятайте, що функція, передана до useMemo, запускається під час рендерингу. Не робіть у ній нічого, що ви
// зазвичай не робите під час рендерингу. Наприклад, побічні ефекти мають бути в useEffect, а не useMemo.
const sumator = (n) => {
    console.log('start')
    let sum = 0;
    for (let i = 0; i < 1000000000; i++) {
        sum += n
    }
    console.log('finish')
    return sum
};

const UseMemo = () => {
    const [n, setN] = useState(5);
    const [count, setCount] = useState(0);

    // const number = sumator(n);

    const number = useMemo(() => {
       return sumator(n)
    }, [n]);

    return (
        <div>
            <h1>sum: {number}</h1>
            <h1>count: {count}</h1>
            <button onClick={() => setN(prevState =>prevState +1)}>incSum</button>
            <button onClick={() => setCount(prevState =>prevState +1)}>incCount</button>
        </div>
    );
};

export {UseMemo};

