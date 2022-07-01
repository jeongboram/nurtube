import React, { useEffect } from 'react';
import ThumbList from 'components/videos/ThumbList'
import Categories from 'components/Categories'
import axios from 'axios'
import { getVideosApi } from 'pages/api/videoApi'


const Home = ({ res }) => {
	// const testMockAPI = async () => {
  //   await axios.get('/getlists').then((res) => {
  //     console.log('mockAPI Results', res)
  //   }).catch((e) => {
  //     console.log('mockAPI Error', e);
  //   })
	// };

  // useEffect(() => {
  //   setTimeout(() => {
	// 	  testMockAPI();
  //   }, 1000);
	// }, []);


  return (
    <>
      <Categories />
      <section className='contents'>
        <ThumbList props={res} />
      </section>
    </>
  )
}


export async function getServerSideProps() {

	const ress = await getVideosApi(20)

  return {
      props: { 
        res: ress.data.items
      }
  }
}


export default Home
