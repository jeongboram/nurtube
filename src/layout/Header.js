import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { getSearchResults } from '../pages/api/videoApi'
import { useRouter } from 'next/router';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons'

function Header() {

	const router = useRouter()
	
	const [results, setResults] = useState([])

	console.log('router', router)


	const [q, setQ] = useState('')


	const onGetvalues = (e) => {
		const val = e.currentTarget.value 
		setQ(val)
	}

	const onSubmit = (e) => {
		e.preventDefault();
		// let res = []
		// const datas = await getSearchResults(q, 50)
		// res.push(datas.data.items)
		// router.routeChangeComplete(() => {
		// 	setResults(datas.data.items)

		// 	console.log('buttn clicked::: ', router)
		// })

		router.push({
			pathname: '/search',
			query: {
				dataQ: q
			}
		})
	}

	useEffect(() => {
	}, [q, results])
	

	return (
		<>
			<header>
				<div className='nav-bar'>
					<button className='btn-navbar' aria-label="Menu"><FontAwesomeIcon icon={faBars} /></button>
					<h1>
						<Link href={'/'}>
							<a>Nurtube</a>
						</Link>
					</h1>
				</div>
				<div className="searchbox">
					<form onSubmit={onSubmit}>
						<input type="search" onChange={onGetvalues} placeholder="검색어" />
						<button type="submit" aria-label="검색"><FontAwesomeIcon icon={faSearch} /></button>
					</form>
				</div>
				<button className="btn-mypage">my</button>
			</header>
		</>
	);
}

export default Header;
