import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

// web3
import Web3 from 'web3'

export default function Home() {
  const [web3, setWeb3] = useState();
  const [account, setAccount] = useState('');

  useEffect(() => {
    if (window.ethereum) {
      const _web3 = new Web3(window.ethereum)
      setWeb3(_web3)
    } else {
      alert('Please install MetaMask!')
    }
  }, [])

  const onConnect = async () => {
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    setAccount(accounts[0]);
  }

  const onLogin = async () => {
    const nonce = Date.now()
    const signature = await web3.eth.personal.sign(web3.utils.fromUtf8(`This is MetaMask login.\nNonce: ${nonce}`), account);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js MetaMask Login</title>
        <meta name="description" content="nextjs metamask login" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {web3 && (
          !account ? (
            <button className={styles.button} onClick={onConnect}>Connect</button>
          ) : (
            <button className={styles.button} onClick={onLogin}>Login</button>
          )
        )}
      </main>
    </div>
  )
}
