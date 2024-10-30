import './Navbar.scss'
import shoppingCart from '../../assets/shopping-cart.png'
import { useRef } from 'react';
import BrandModal from './BrandModal/BrandModal';
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';

function Navbar() {
    const op = useRef(null);

    return (
        <div id='navbar-container'>
            <nav id='navbar'>
                <ul id='items-container-start'>
                    <Link to="/"><img id="logo-image" src={logo} alt="Logo" /></Link>

                    <li onClick={(e) => op.current.toggle(e)}><p>Marcas</p></li>
                    <BrandModal op={op} />
                    
                    <li><Link to="/register-sneaker" className='link'>Cadastrar Sneaker</Link></li>

                </ul>
{/* 
                <div id='carshop-icon-container'>
                    <img id='carshop-image' src={shoppingCart} alt="carshop" />
                    <div id="quantity-products-in-carshop">1</div>
                </div> */}
            </nav>
        </div>
    )
}

export default Navbar