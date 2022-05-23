import { useState, useEffect } from 'react'
import { StoreProvider } from 'store/Context.jsx'
import { RootStore } from 'store/RootStore'
import Header from 'layout/Header'
import Footer from 'layout/Footer'
import Nav from 'layout/Nav'
import 'assets/scss/globals.css'
import 'assets/scss/ui.scss'

const rootStore = new RootStore()


function MyApp({ Component, pageProps }) {

  const [searhResults, setSearchResults] = useState([])

  //Mocking API Start 
  if (process.env.NODE_ENV === "development") {
    (async () => {
      const { worker } = await import('mocks/browser');
      worker.start();
    })();
  }

  const searchData = (data) => {
    setSearchResults(data)
  }

  useEffect(() => {
  
  }, [searhResults])
  


  return (
    <>
      <StoreProvider value={rootStore}>
        <div className='wrapper'>
          <Header searchData={searchData} />
          <section className='contents-wrapper'>
            <Nav />
            <div className='inner'>
              <Component {...pageProps} searhResults={searhResults} />
              <Footer />
            </div>
          </section>
        </div>
      </StoreProvider>
    </>
  )
}

export default MyApp
