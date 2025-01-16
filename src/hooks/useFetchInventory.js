import { useState, useEffect } from 'react';

const BASE_URL = `https://dev-0tf0hinghgjl39z.api.raw-labs.com/`
const useFetchInventory = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const cachedData = localStorage.getItem('inventoryData');
        if (cachedData) {
            setData(JSON.parse(cachedData));
            setIsLoading(false);
        } else {
            fetch(BASE_URL + url)
                .then((res) => {
                    if (!res.ok) {
                        throw new Error('Failed to fetch data');
                    }
                    return res.json();
                })
                .then((data) => {
                    setData(data);
                    localStorage.setItem('inventoryData', JSON.stringify(data));
                    setIsLoading(false);
                })
                .catch((err) => {
                    console.log('Error:', err);
                    setError('Failed to load inventory data. Please try again later.');
                    setIsLoading(false);
                });
        }
    }, [url]);

    return { data, isLoading, error };
};

export default useFetchInventory;
