import Link from 'next/link'
import React from 'react'

function Nav() {
    return (
        <>
            <section className='nav-wrapper'>
                <nav>
                    <ul>
                        <li><Link href={'/'}><a>홈</a></Link></li>
                        <li><Link href={'/popular'}><a>인기</a></Link></li>
                        <li><Link href={'/like'}><a>좋아요 표시한 영상</a></Link></li>
                        <li><a>나중에 볼 동영상</a></li>
                        <li><a>시청 기록</a></li>
                    </ul>
                </nav>
                <div>
                    <ul>
                        <li><a>전체</a></li>
                        <li><a>요리 프로그램</a></li>
                        <li><a>부동산</a></li>
                        <li><a>자연</a></li>
                        <li><a>음악</a></li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Nav