
import styles from './digital.module.css';
import Image from 'next/image';
import feature from '../../assets/images/featureimage.png';
import roundimage from '../../assets/images/round.png';

export default function Growth() {
    return (
        <div className={`container-fluid ${styles.container}`}>
            <div className={`row text-center `}>
                <div className="col-12">
                    <h2 className={`text-center mt-5 ${styles.heading}`}>
                        Digital Solutions for Sustainable Growth
                    </h2>
                    <p className={`text-center mt-3 ${styles.text}`}>
                        Delivering digital solutions to optimize operations and reduce environmental impact
                    </p>
                </div>
            </div>
            <div className="row align-items-center justify-content-center">
                <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
                    <Image
                        src={feature}
                        alt="featureimage"
                        className={`img-fluid`}
                        width={486}
                        height={381}
                    />
                </div>
                <div className="col-md-6">
                    <div className={`d-flex flex-column mt-2 `}>
                        <div className={`d-flex ${styles.content1} mb-4`}>
                            <div className={styles.roundimage}>
                                <Image
                                    src={roundimage}
                                    alt="roundimage"
                                    width={43}
                                    height={43}
                                />
                                <p>1</p>
                            </div>
                            <div className={`d-flex flex-column  ms-3`}>
                                <p className={styles.integratingmanafacturing}>Integrated Manufacturing</p>
                                <div className={`d-flex flex-column ${styles.management}`}>
                                    <div className={styles.manufacturing}>
                                        <span> Manufacturing Management: </span>Smart factories with real-time optimization and carbon tracking
                                    </div>
                                    <div className={`mt-2 ${styles.transport}`}>
                                        <span> Transport and Warehouse Management: </span>Improve visibility, freshness, and feedback integration
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={`d-flex ${styles.content2}`}>
                            <div className={styles.roundimage}>
                                <Image
                                    src={roundimage}
                                    alt="roundimage"
                                    width={43}
                                    height={43}
                                />
                                <p>2</p>
                            </div>
                            <div className={`d-flex flex-column  ms-3`}>
                                <p className={styles.economy}>Mobility Circular Economy</p>
                                <div className={`d-flex flex-column ${styles.digital}`}>
                                    <div className={styles.mobility}>
                                        <span>Mobility Aftermarket Super App: </span>Connect customers to services with transparent pricing
                                    </div>
                                    <div className={`mt-2 ${styles.vehicle}`}>
                                        <span>  Vehicle Digital Inspection: </span>Automated AI-powered vehicle inspections and valuations
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`row mt-5 `}>
                <div className={`col-12 d-flex flex-column align-items-center justify-content-center ${styles.quantifiablegrowth}`}>
                    <h3 className={`${styles.growth} text-start mt-5 `} >
                        Quantifiable Growth
                    </h3>
                    <p className={`mt-3 ${styles.integrated}`}>
                        <span>Integrated Manufacturing:</span> Smart factories with real-time optimization and carbon tracking.
                        Solwer&apos;s digital solutions cut logistics costs by 25%, improve carbon footprint accuracy to 90%,
                        and increase productivity by 20%, building a resilient, agile supply chain.
                    </p>
                    <p className={styles.circular}>
                        <span>Mobility Circular Economy:</span> The Mobility Aftermarket Super App connects customers to services with
                        transparent pricing, while AI-powered Vehicle Digital Inspection ensures accurate assessments. Solwer&apos;s solutions
                        reduce consumer costs and boost repair shop revenue by 10%, delivering 90% accuracy in inspections and enhancing efficiency.
                    </p>
                </div>
            </div>

        </div>
    );
} 
