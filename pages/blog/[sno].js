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
    <br></br>
      <h1 style={{ fontWeight: '900', fontSize: '36px', marginBottom: '20px', textTransform: 'uppercase', border: '2px solid #333', padding: '10px', backgroundColor: 'white' }}>FACT ID: {parts[0]}</h1>
<br></br>
<div style={{ justifyContent: 'center', display: 'flex', alignItems: 'center', textAlign: 'center'}} className="catimage">
  <Image
    src="/cat.gif"
    width={250}
    height={250}
    alt="Picture of the author"
    style={{ className: 'Homeimage' }}
  />
</div>
<br></br><br></br>
<div style={{ fontWeight: '900', fontSize: '18px', backgroundColor: 'white', padding: '10px', border: '1px solid #ccc', borderRadius: '15px', width: '50%', margin: '0 auto'}}>
        <h3 style={{ color: 'blue' }}>Let's Know !</h3>
        <br></br>
        <p style={{ color: 'green' }}>{parts[1]}</p>
        <br></br>
        <p style={{ color: 'red' }}>Author: Sohel</p>
      </div>

<br></br><br></br>
      <Link href="/blogs"><button className="button">GO BACK</button></Link>
      <br/><br/>
    </>
  )
}

export default Post
