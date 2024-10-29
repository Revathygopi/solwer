import supplychainvideo from '../../assets/images/supplychainvideo.png';
import Image from 'next/image';

export default function SupplyChain(){
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-12 col-lg-12 d-flex justify-content-center align-items-center'>
                    <Image src={supplychainvideo} alt="solwervideo" className='img-fluid'/>
                </div>
            </div>
        </div>
    )
}