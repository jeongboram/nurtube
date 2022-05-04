
import { useRouter } from "next/router"

export default function VideoDetail() {

    const router = useRouter();
    const { id } = router.query

    const onLike = () => {
        localStorage.setItem('like', id)
    }

    return (
        <>
            <section className='contents'>
                {id}
                <button className="btn-like" onClick={onLike}>Like</button>
            </section>
        </>
    )
}
