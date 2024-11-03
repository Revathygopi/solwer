import { Carousel } from '../carousel/carousel';
import styles from './mobility.module.css';
import Image from 'next/image';
import mobileimage1 from '../../assets/images/mobileimage1.png';
import mobileimage2 from '../../assets/images/mobileimage2.png';
import mobileimage3 from '../../assets/images/mobileimage3.png';

export default function Mobility() {
    return (
        <div className={`container-fluid ${styles.container}`}>
            <div className='row'>
                <div className='col-12 col-lg-12 d-flex flex-column justify-content-center align-items-center'>
                    <h2 className={`text-center mt-5 ${styles.heading}`}>
                        Seamless Access to the Mobility Aftermarket
                    </h2>
                    <p className={`text-center mt-3 ${styles.app}`}>
                        Our super app connects customers with service providers, including repair shops, car dealers,
                        and car washes, offering transparent pricing and cross-selling opportunities
                    </p>
                    <button className={` mt-2 ${styles.marketbutton}`}>
                        <a className={`text-center ${styles.marketplace}`}>Join Our Marketplace</a>
                    </button>
                </div>
                <div className='d-lg-none col-12'>
                    <Carousel></Carousel>
                </div>
            </div>
            <div className='row'>
                <div className={`d-lg-flex justify-content-center align-iems-center d-none d-lg-block mt-5 ${styles.imagecontainer}`}>
                    <div className="col-3  d-flex flex-column px-3">
                        <Image
                            src={mobileimage1}
                            alt="Mobileimage"
                            className={`img-fluid ${styles.image1}`}
                            width={282}
                            height={621}
                        />
                        <div className={`rounded ${styles.vehicle}`}>
                            <p className='text-center'>Vehicle Repair</p>
                        </div>

                    </div>
                    <div className={`col-3 d-flex flex-column px-3 ${styles.finance}`}>
                        <Image
                            src={mobileimage2}
                            alt="Mobileimage"
                            className={`img-fluid ${styles.image2}`}
                            width={282}
                            height={621}
                        />
                        <div className={`rounded ${styles.vehicle}`}>
                            <p className='text-center'>Vehicle Finance</p>
                        </div>
                    </div>

                    <div className="col-3 d-flex flex-column px-3">
                        <Image
                            src={mobileimage3}
                            alt="Mobileimage"
                            className={`img-fluid ${styles.image3}`}
                            width={282}
                            height={621}
                        />
                        <div className={`rounded ${styles.vehicle}`}>

                            <p className='text-center'>Inventory Management</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}