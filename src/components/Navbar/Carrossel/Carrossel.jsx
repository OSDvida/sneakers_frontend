import './Carrossel.scss'
import { carrosselImages } from '../../../utils/carrosselImageLiks'
import { useEffect, useState } from 'react'

function Carrossel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % carrosselImages.length);
        }, 4000); // Muda a cada 3 segundos

        return () => clearInterval(interval); // Limpa o intervalo quando o componente for desmontado
    }, []);

    return (
        <div className="carrossel-container">
            <div
                className="carrossel"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {carrosselImages.map((image, index) => (
                    <div className="slide" key={index}>
                        <img src={image} alt={`Slide ${index + 1}`} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Carrossel