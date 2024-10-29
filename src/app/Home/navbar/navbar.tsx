'use client';
import { useState, useEffect } from "react";
import Link from "next/link";
import { IoClose, IoMenu } from "react-icons/io5";
import logo from '../../assets/images/logo.svg';
import Image from 'next/image';
import styles from './navbar.module.css'

export default function Navbar() {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const closeMenuOnMobile = () => {
        if (window.innerWidth <= 1150) {
            setShowMenu(false);
        }
    };
    useEffect(() => {
        window.addEventListener('resize', closeMenuOnMobile);
        return () => {
            window.removeEventListener('resize', closeMenuOnMobile);
        };
    }, []);

    return (
        <div className="container-fluid">
            <div className="row ">
                <div className={`col-6 ${styles.solwerlogo}`}>
                    <Image src={logo} alt="solwerlogo" className='img-fluid ' width={102} height={48} />
                </div>
                <div className="col-6 d-flex flex-column  justify-content-center ">
                    <div className={` ${styles.navmenu} ${showMenu ? styles.showMenu : ""}`} >
                        <ul className={`d-flex ${styles.navlist}`}>
                            <li className={styles.navitem} >
                                <Link href="/" className={styles.home} onClick={closeMenuOnMobile}>
                                    Home
                                </Link>
                                <p className={styles.line}></p>
                            </li>
                            <li className={styles.navitem}>
                                <Link href="/video" className={styles.video} onClick={closeMenuOnMobile}>
                                    Video
                                </Link>
                                <p className={styles.line}></p>
                            </li>
                            <li className={styles.navitem}>
                                <Link href="/product-brouchure" className={styles.product} onClick={closeMenuOnMobile}>
                                    Product Brochure
                                </Link>
                                <p className={styles.line}></p>
                            </li>
                            <li className={styles.navitem}>
                                <Link href="/solution" className={styles.solution} onClick={closeMenuOnMobile}>
                                    Solutions
                                </Link>
                                <p className={styles.line}></p>
                            </li>
                            <li className={styles.navitem}>
                                <Link href="/mission" className={styles.mission} onClick={closeMenuOnMobile}>
                                    Our Mission
                                </Link>
                                <p className={styles.line}></p>
                            </li>
                        </ul>
                        <div className={styles.navclose} onClick={toggleMenu}>
                            <IoClose />
                        </div>
                    </div>


                    <div className={styles.navtoggle} onClick={toggleMenu}>
                        <IoMenu />
                    </div>
                </div>
            </div>
        </div>
    )
}





