import { useEffect, useState } from 'react'
import './SneakerList.scss'
import CentralContentWrapper from '../../hoc/CentralContentWrapper/CentralContentWrapper.jsx'
import axios from 'axios'
import SneakerCard from './SneakerCard/SneakerCard.jsx'
import SpaceSpan from '../SpaceSpan/SpaceSpan.jsx'
import Title from '../Title/Title.jsx'

function SneakerList() {
    const apiUrl = import.meta.env.VITE_API_URL
    const [sneakers, setSneakers] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        getSneakers()
    }, [])

    function handleDeleteSneaker(id) {
        axios.delete(`${apiUrl}sneakers/${id}`)
        .then(() => getSneakers())
    }

    function getSneakers() {
        setIsLoading(true)

        return axios.get(`${apiUrl}sneakers`)
            .then(({ data }) => setSneakers(data))
            .finally(() => setIsLoading(false))
    }


    if (isLoading) return "Carregando..."

    return (
        <div id='sneaker-container'>
            <div id='sneaker-content'>
                <Title title="Sneakers" />
                <SpaceSpan marginBottom={20} />
                <ul id='sneaker-list'>
                    {sneakers.map((sneaker) => <SneakerCard
                        key={sneaker.id}
                        id={sneaker.id}
                        imagePath={sneaker.imagePath}
                        name={sneaker.name}
                        handleDeleteSneaker={handleDeleteSneaker}
                        />
                    )}
                </ul>

            </div>
        </div>
    )
}

export default CentralContentWrapper(SneakerList)