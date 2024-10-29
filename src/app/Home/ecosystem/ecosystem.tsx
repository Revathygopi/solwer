import Image from "next/image";
import ecosystemimage from '../../assets/images/ecosystemimage.png';
import styles from './ecosystem.module.css'

export default function Ecosystem() {
    return (
        <div className="container-fluid">
            <div className="row d-flex mt-5">
                <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center order-2 order-lg-1">
                    <Image src={ecosystemimage} alt="ecosystemimage" className="img-fluid" />
                </div>
                <div className={`col-12 col-lg-6 d-flex flex-column justify-content-center order-1 order-lg-2 ${styles.ecosystemcontent}`}>
                    <h2 className={` ${styles.heading}`}>
                        Building Interconnected Ecosystems for the Future
                    </h2>
                    <p className={`mt-3 ${styles.solwerfacilitate}`}>
                      <span> At Solwer,</span> we facilitate cross-border and cross-industry data exchange to
                        establish two robust ecosystems: Integrated Manufacturing and Mobility Circular Economy.
                    </p>
                    <p className={`mt-2 ${styles.solwervalue}`}>
                       <span> Our value proposition </span> provides peace of mind through a robust,
                        risk-resistant supply chain, ensuring seamless operations.
                    </p>
                </div>
            </div>
        </div>
    )
}