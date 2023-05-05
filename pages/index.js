import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>AI Text Summarization</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap" rel="stylesheet" />
      </Head>
      <main>
        <div className={styles.titleContainer}>
          <Image src="/images/logo.png" alt="App Icon" width={100} height={100} className={styles.imageLogo} />
          <h1 className={styles.fullwidthBanner}>Text Summarization Powered by AI</h1>
          <Image src="/images/logo.png" alt="App Icon" width={100} height={100} className={styles.imageLogo} />
        </div>
        <div className={styles.grid}>
          <Link href="/Summaries/billsum">
            <div className={styles.card}>
              <h3>Bill Summarization &rarr;</h3>
              <p>Copy paste an entire bill and receive a concise summary of the legislation.</p>
            </div>
          </Link>

          <Link href="/Summaries/medicalsum">
            <div className={styles.card}>
              <h3>Medical Explanations &rarr;</h3>
              <p>Bring any complex medical language and get a simple summary of what it says.</p>
            </div>
          </Link>

          <Link href="/Summaries/articlesum">
            <div className={styles.card}>
              <h3>Articles &rarr;</h3>
              <p>Get highlights from any articles you are interested in but don't have time to read.</p>
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}
