import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { getSearchResults } from '../../pages/api/videoApi'
import { useRouter } from 'next/router';

function Header({ searchData }) {

	const router = useRouter();

	const [q, setQ] = useState('')
	const [results, setResults] = useState([])

	const onGetvalues = (e) => {
		const val = e.currentTarget.value 
		setQ(val)
	}

	const onSubmit = async (e) => {
		e.preventDefault();
		router.push('/search')
		const datas = await getSearchResults(q, 25)
		setResults(datas.data.items)
	}

	useEffect(() => {
		searchData(results)
	}, [results])


	return (
		<>
			<header>
				{/* <h1>
					<Link href={'/'}>
						<a>Nurtube</a>
					</Link>
				</h1> */}
				<div className="searchbox">
					<form onSubmit={onSubmit}>
						<input type="search" onChange={onGetvalues} placeholder="검색어" />
						<button type="submit" aria-label="검색"></button>
					</form>
				</div>
				<button className="btn-mypage">my</button>
			</header>
		</>
	);
}

export default Header;
