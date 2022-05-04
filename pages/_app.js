import 'assets/scss/globals.css'
import 'assets/scss/ui.scss'
import Header from 'layout/Header'
import Footer from 'layout/Footer'
import Nav from 'layout/Nav'

function MyApp({ Component, pageProps }) {
  return (
    <>
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
    </>
  )
}

export default MyApp
