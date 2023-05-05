// pages/billsum.js
import Head from 'next/head';
import Layout from '../../components/layout';
import { SummarizeForm } from '../../components/SummarizeForm';

export default function BillSum() {
  return (
    <Layout>
      <Head>
        <title>Summarize Legislation</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap" rel="stylesheet" />
      </Head>
      <main>
        <SummarizeForm />
      </main>
    </Layout>
  );
}
