import { StoreProvider } from 'store/Context.jsx'
import { RootStore } from 'store/RootStore'
import 'assets/scss/globals.css'
import 'assets/scss/ui.scss'
import Header from 'layout/Header'
import Footer from 'layout/Footer'
import Nav from 'layout/Nav'

const rootStore = new RootStore()

function MyApp({ Component, pageProps }) {
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
