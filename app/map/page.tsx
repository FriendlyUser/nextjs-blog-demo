"use client";
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
// import { LeafletMap} from "@/components/LeafletMap"
import dynamic from 'next/dynamic';

const LeafletMap = dynamic(() => {
  return import('../../components/LeafletMap').then((mod) => mod.LeafletMap);
}, {
  ssr: false,
});

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <main className={styles.main}>
    </main>
    <LeafletMap />
    </>
  )
}
