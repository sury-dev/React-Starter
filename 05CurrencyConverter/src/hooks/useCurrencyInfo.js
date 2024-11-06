import {useEffect, useState} from 'react';

function useCurrencyInfo(currency){

    const [data, setData] = useState({})

    currency = currency.toUpperCase();
    let url = `https://api.frankfurter.app/latest?base=${currency}`
    // fetch(url)
    //     .then((res) => res.json())
    //     .then((res) => {console.table(res["rates"])})

    useEffect(() => {
        fetch(url)
        .then((res) => res.json())
        .then((res) => setData(res["rates"]))
        // console.table(data);
    }, [currency])

    return data;
}

export default useCurrencyInfo;

