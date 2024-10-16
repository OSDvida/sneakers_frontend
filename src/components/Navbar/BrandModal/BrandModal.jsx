import './BrandModal.scss'
import { OverlayPanel } from 'primereact/overlaypanel';
import BrandList from './BrandList/BrandList';

function BrandModal({ op }) {
    return (
        <OverlayPanel id='brand-modal-container' ref={op}>
            <BrandList />
        </OverlayPanel>
    )
}

export default BrandModal