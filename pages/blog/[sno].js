import { useRouter } from 'next/router'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import "../globals.css"
const Post = () => {
  const router = useRouter()
  const { sno } = router.query
  var parts = ["ID", "FACTS"]
  if (sno != undefined) {
    parts = sno.split('&')
  }
  
  return (
    <>
      <h1 className="heading">FACT ID : {parts[0]}</h1>
      <br></br>
      <div className="catimage">
      <Image
        src="/cat.gif"
        width={250}
        height={250}
        alt="Picture of the author"
        className="Homeimage"
      />
      </div>
      <br></br><br></br>
      <h6 className="heading">{parts[1]}</h6>
      <br></br><br></br>
      <Link href="/blogs"><button className="button">GO BACK</button></Link>
    </>
  )
}

export default Post
