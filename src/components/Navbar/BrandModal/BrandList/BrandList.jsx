import { useEffect, useState } from 'react';
import './BrandList.scss'
import axios from 'axios';

function BrandList() {
    const apiUrl = import.meta.env.VITE_API_URL;
    const [brands, setBrands] = useState([]);
    const [isLoading, setIsLoading] = useState(false)

    function getBrands() {
        setIsLoading(true)

        return axios.get(`${apiUrl}brands`)
            .then(({ data }) => setBrands(data))
            .finally(() => setIsLoading(false))
    }

    useEffect(() => {
        getBrands()
    }, [])

    if (isLoading) return "Carregando..."

    return (
        <ul id='brands-items'>
            {brands.map(brand => (
                <li key={brand.id}>
                    {brand.name}
                </li>
            ))}
        </ul>
    )
}

export default BrandList