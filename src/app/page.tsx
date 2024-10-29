import Growth from "./Home/digitalsolutions/digital";
import Vehicle from "./Home/digitalvehicle/vehicle";
import Ecosystem from "./Home/ecosystem/ecosystem";
import Footer from "./Home/footer/footer";
import Hero from "./Home/hero/hero";
import Mobility from "./Home/mobility/mobility";
import Navbar from "./Home/navbar/navbar";
import SupplyChain from "./Home/supplychain/supplychain";
import styles from './page.module.css'


export default function Home() {
  return (
    <>
      <div className={styles.navhero}>
        <Navbar></Navbar>
        <Hero></Hero>
      </div>
      <SupplyChain></SupplyChain>
      <Ecosystem></Ecosystem>
      <Mobility></Mobility>
      <Vehicle></Vehicle>
      <Growth></Growth>
      <Footer></Footer>
    </>
  );
}
