import Image from "next/image";
import styles from "./page.module.css";
import HomeTop from "./components/home/HomeTop";
import StatBand from "./components/home/StatBand";
import WhySponsor from "./components/home/WhySponsor";
import Ftc from "./components/home/Ftc";
import Tiers from "./components/home/Tiers";
import Donate from "./components/home/Donate";
import Sponsors from "./components/home/Sponsors";

export default function Home() {
  return (
    <div>
        <HomeTop />
        <StatBand />
        <WhySponsor />
        <Ftc />
        <Tiers />
        <Donate />
        <Sponsors />
    </div>
  );
}
