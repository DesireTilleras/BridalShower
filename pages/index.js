import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import startPage from './startPage'
import FrontPage from './startPage'

export default function Home() {
  return (
    <div className={styles.container}>
      <FrontPage />

      <main className={styles.main}></main>
    </div>
  );
}
