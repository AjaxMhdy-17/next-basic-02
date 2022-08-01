import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
          <title>fast blog</title>
          <meta name="keywords" content="blog next" />
      </Head>
      <main>
        <div className={styles.title}>
          <h3>Hello Next</h3>
        </div>
        <div>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipisicing.
          </p>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipisicing.
          </p>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipisicing.
          </p>
          <Link href="/posts">
            <div className={styles.btn}>goto Post List</div>
          </Link>
        </div>
      </main>
    </>
  );
}
