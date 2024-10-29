import styles from './hero.module.css';
import Image from 'next/image';
import denoecosystemimage from '../../assets/images/denso.png'

export default function Hero() {
    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12 col-lg-12 mt-5 d-flex flex-column align-items-center justify-content-center'>
                        <h1 className={`text-center ${styles.heading}`}>
                            Empowering Supply Chain and Value Chain Excellence
                        </h1>
                        <p className={`text-center mt-1 ${styles.digitalplatform}`}>
                            As a leading digital platform, Solwer empowers businesses to revolutionize their supply chains and value chains with cutting-edge technologies. Our AI driven solutions offer real-time optimization and predictive insights, driving smarter manufacturing and sustainable mobility ecosystem.
                            With Solwer, you’ll build stronger customer relationships
                        </p>
                        <Image src={denoecosystemimage} alt="denoecosystemimage" className='img-fluid'/>
                        <h2 className={`text-center mt-5 ${styles.challenges}`}>
                        Current Ecosystem Challenges
                        </h2>
                        <p className={`text-center ${styles.solwersolution}`}>
                        Industries today face critical challenges, including a skilled labour gap, inefficient supply chains, and low customer trust, which contribute to lower job creation and increased CO2 emissions. These issues not only disrupt business continuity but also impede sustainable growth. 
                        Solwer addresses these problems, fostering a more resilient and trusted business ecosystem.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}