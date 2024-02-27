import { useRouter } from 'next/router'
import "../globals.css"
const Post = () => {
  const router = useRouter()
  const { sno } = router.query

  return <h1>Post: {sno}</h1>
}

export default Post
