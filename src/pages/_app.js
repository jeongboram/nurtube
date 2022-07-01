import { useState, useEffect } from 'react'
import { StoreProvider } from 'store/Context.jsx'
import { RootStore } from 'store/RootStore'
import Header from 'layout/Header'
import Footer from 'layout/Footer'
import Nav from 'layout/Nav'
import 'assets/scss/globals.css'
import 'assets/scss/ui.scss'
import { useRouter } from 'next/router';

const rootStore = new RootStore()


function MyApp({ Component, pageProps }) {


  //Mocking API Start 
  if (process.env.NODE_ENV === "development") {
    (async () => {
      const { worker } = await import('mocks/browser');
      worker.start();
    })();
  }


  return (
    <>
      <StoreProvider value={rootStore}>
        <div className='wrapper'>
          <Header />
          <section className='contents-wrapper'>
            <Nav />
            <div className='inner'>
              <Component {...pageProps} />
              <Footer />
            </div>
          </section>
        </div>
      </StoreProvider>
    </>
  )
}

export default MyApp
