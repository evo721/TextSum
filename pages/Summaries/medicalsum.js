import Link from 'next/link';
import Head from 'next/head'
import LayoutTwo from '../../components/layouttwo';
import { SummarizeForm } from '../../components/SummarizeForm';

export default function MedicalSum() {
  return (
    <LayoutTwo>
      <Head>
        <title>Medical Summaries</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap" rel="stylesheet" />
      </Head>
      <main>
        <SummarizeForm />
      </main>
    </LayoutTwo>
  );
}
