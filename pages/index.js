
import ThumbList from 'components/videos/ThumbList'
import Categories from 'components/Categories'

const Home = () => {
  return (
    <>
      <Categories />
      <section className='contents'>
        <ThumbList />
      </section>
    </>
  )
}

export default Home
