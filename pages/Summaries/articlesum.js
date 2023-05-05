import Link from 'next/link';
import Head from 'next/head'
import LayoutThree from '../../components/layoutthree'; 
import { SummarizeForm } from '../../components/SummarizeForm';

export default function ArticleSum() {
  return (
    <LayoutThree>
      <Head>
        <title>Summarize an Article</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap" rel="stylesheet" />
      </Head>
      <main>
        <SummarizeForm />
      </main>
    </LayoutThree>
  );
}
