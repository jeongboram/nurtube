import { StoreProvider } from 'store/Context.jsx'
import { RootStore } from 'store/RootStore'
import 'assets/scss/globals.css'
import 'assets/scss/ui.scss'
import Header from 'layout/Header'
import Footer from 'layout/Footer'
import Nav from 'layout/Nav'

// MSW : MOCK API 사용할 경우
// 노드 환경에선 server, 브라우저 환경에선 worker를 사용한다.
(async () => {
  const { worker } = await import('mocks/worker');
  worker.start();
})();

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
