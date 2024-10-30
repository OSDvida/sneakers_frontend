import './SneakerCard.scss'
import { FaTrash } from "react-icons/fa";

const NO_IMAGE_DEFAULT_URL = 'https://sneaker-store-bucket.s3.eu-north-1.amazonaws.com/no-image.png'

function SneakerCard({ id, imagePath, name, handleDeleteSneaker }) {
    return (
        <div className="card-container">
            <div className="card-content">
                <img className='sneaker-image' src={imagePath ? imagePath : NO_IMAGE_DEFAULT_URL} alt="" />
                <p>{name}</p>
            </div>
            <div className="actions">
                <FaTrash className='actions-icon' onClick={() => handleDeleteSneaker(id)} />

            </div>
        </div>
    )
}

export default SneakerCard