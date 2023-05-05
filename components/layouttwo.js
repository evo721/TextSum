// components/layout.js
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/layout.module.css';

export const siteTitle = 'Medical Summaries';

export default function LayoutTwo({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="An AI-powered text summarization tool"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        <h1 className={styles.title}>{siteTitle}</h1>
      </header>
      <main>{children}</main>
      {home ? null : (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
}
