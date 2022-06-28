import Link from 'next/link';
import React, { useState, useEffect } from 'react';
// import { categories } from '../mocks/handlers/categories'

import Categories from 'components/Categories';

function Nav() {

	
	// const [channels, setChannels] = useState([])

	// useEffect(() => {
	// 	setChannels(categories)
	// }, [channels])
	

	
	return (
		<>
			<section className="nav-wrapper">
				<nav>
					<ul>
						<li>
							<Link href="/">
								<a>홈</a>
							</Link>
						</li>
						<li>
							<Link href="/watched">
								<a>시청 기록</a>
							</Link>
						</li>
						<li>
							<Link href="/like">
								<a>좋아요 표시한 영상</a>
							</Link>
						</li>
						<li>
							<Link href="/save">
								<a>나중에 볼 동영상</a>
							</Link>
						</li>
						
					</ul>
				</nav>
				<Categories />
				
			</section>
		</>
	);
}

export default Nav;
