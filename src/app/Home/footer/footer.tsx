import styles from './footer.module.css';
import Image from 'next/image';
import footerimage from '../../assets/images/footerimage1.png';
import rightquote from '../../assets/images/rightquote.png';
import leftquote from '../../assets/images/leftquote.png';
import footerlogo from '../../assets/images/logo .png';
import youtube from '../../assets/images/YouTube.png';
import instagram from '../../assets/images/Instagram.png';
import twitter from '../../assets/images/Twitter.png';
import linkdn from '../../assets/images/LinkedIn.png'

export default function Footer() {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className={`col-12 d-flex flex-column justify-content-center align-items-center  ${styles.testinomial}`}>
                    <h2 className={`mt-5 text-center ${styles.heading}`}>
                        Our Commitment to a Sustainable Future
                    </h2>
                    <p className={` mt-2 text-center ${styles.solwermission}`}>
                        <Image src={leftquote} alt="Opening quote" className="mb-4 me-2 d-none d-md-inline" />
                        At Solwer, our mission is to create a better world through lean and clean innovation,
                        providing digital solutions to optimize operations and reduce environmental impact.
                        <Image src={rightquote} alt="Closing quote" className="mb-4 mx-2  d-none d-md-inline" />
                    </p>
                    <Image src={footerimage} alt='footer image' className='img-fluid' />
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-3 col-6 p-4">
                    <Image src={footerlogo} alt="footer logo" className={` ${styles.footerlogo}`} />
                </div>
                <div className={`col-lg-2 col-md-3 col-6 p-4 d-flex justify-content-between ${styles.socilamedia}`}>
                    <a href="https://www.youtube.com" target="_blank" className={styles.youtube}>
                        <Image src={youtube} alt="youtube" width={20} height={20} />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" className={styles.instagram}>
                        <Image src={instagram} alt="instagram" width={20} height={20} />
                    </a>
                    <a href="https://twitter.com" target="_blank" className={styles.twitter}>
                        <Image src={twitter} alt="twitter" width={20} height={20} />
                    </a>
                    <a href="https://www.linkedin.com" target="_blank" className={styles.linkdn}>
                        <Image src={linkdn} alt="linkedin" width={20} height={20} />
                    </a>
                </div>
                <div className={`col-12 d-lg-none d-md-none ${styles.line}`}></div>
                <div className={`col-lg-6 col-md-6 col-12 p-4 d-flex  ${styles.contact}`}>
                    <div className={`d-flex  w-100 ${styles.contact}`}>
                        <a href="/privacy-policy" className={`${styles.privacy} me-3`}>
                            Privacy Policy
                        </a>
                        <a href="/terms-conditions" className={`${styles.conditions} me-3`}>
                            Terms & Conditions
                        </a>
                        <a href="/contact" className={`${styles.contacts} me-3`}>
                            Contact
                        </a>
                    </div>
                </div>
            </div>


        </div>




    )
}