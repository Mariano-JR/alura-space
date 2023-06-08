import styles from "./HomePage.module.scss";
import Header from "components/Header";
import Menu from "components/Menu";
import Banner from "components/Banner";
import Footer from "components/Footer";
import Galery from "components/Galery";
import Populares from "components/Populares";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <section className={styles.main}>
          <Menu />
          <Banner />
        </section>
        <div className={styles.galery}>
          <Galery />
          <Populares />
        </div>
      </main>
      <Footer />
    </>
  );
}
