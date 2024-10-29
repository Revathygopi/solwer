import styles from './vehicle.module.css';
import Image from 'next/image';
import digitalimage from '../../assets/images/digitalimage.png';
import checkfill from '../../assets/images/check-fill.png';
import downloadicon from '../../assets/images/download-icon.png';
export default function Vehicle() {
    return (
        <div className={`container-fluid ${styles.container}`}>
            <div className='row'>
                <div className='col-12 col-lg-12 d-flex  flex-column align-items-center justify-content-center mt-5'>
                    <h2 className={`text-center ${styles.heading}`}>
                        Vehicle Digital Inspection
                    </h2>
                    <p className={`text-center ${styles.solwertransform}`}>
                        Our platform transforms vehicle inspection by automating valuations through advanced image recognition
                        and machine learning
                    </p>
                    <Image src={digitalimage} alt="digitalimage" className={`img-fluid ${styles.digitalimage}`} />
                    <h3 className={`text-center mt-4 ${styles.bussinessimpact}`}>
                        Customer and Business Impact
                    </h3>
                    <p className={`text-center mt-1 ${styles.solwerdelivers}`}>
                        Solwer&apos;s AI-powered Vehicle Digital Inspection delivers 90% accuracy, boosting trust and reducing manual errors. Standardizing over 100 inspection points across key areas like the exterior, interior, and engine, Solwer ensures consistent evaluations. With reports generated in under 90 minutes,
                        it minimizes human error, speeds up decision-making, and improves efficiency
                    </p>
                    <ul className={`d-flex mt-4 flex-wrap ${styles.digitallist}`}>

                        <li className={`d-flex `}>
                            <Image
                                src={checkfill}
                                alt="checkfill"
                                className='mt-1'
                            />
                            <p className='mx-2'>Improved data management</p>
                        </li>

                        <li className={`d-flex`}>
                            <Image
                                src={checkfill}
                                alt="checkfill"
                                className='mt-1'
                            />
                            <p className='mx-2' > Transparency</p>
                        </li>

                        <li className={`d-flex`}>
                            <Image
                                src={checkfill}
                                alt="checkfill"
                                className='mt-1'
                            />
                            <p className='mx-2'>Refined Reports</p>
                        </li>

                        <li className={`d-flex`}>
                            <Image
                                src={checkfill}
                                alt="checkfill"
                                className='mt-1'
                            />
                            <p className='mx-2'>Speed and Efficiency</p>
                        </li>

                    </ul>
                    <button className={`d-flex mt-3 mb-5 ${styles.downloadbutton}`}>
                        <Image
                            src={downloadicon}
                            alt="download-icon"
                            className={`me-2 ${styles.downloadicon}`}
                            width={30}
                            height={20}
                        />
                        <p className='text-center px-1'>
                            Download Product Brochure
                        </p>
                    </button>
                </div>
            </div>
        </div>
    )
}