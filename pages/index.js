import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next page</title>
      </Head>
      
      <h1 className={styles.homePageTitle}>Hello World</h1>
    </div>
  )
}
