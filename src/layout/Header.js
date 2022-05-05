import React from 'react';
import Link from 'next/link';

function Header() {
	return (
		<header>
			<h1>
				<Link href={'/'}>
					<a>Nurtube</a>
				</Link>
			</h1>
			<div className="searchbox">
				<form>
					<input type="search" placeholder="검색어" />
					<button type="submit" aria-label="검색"></button>
				</form>
			</div>
			<button className="btn-mypage">my</button>
		</header>
	);
}

export default Header;
