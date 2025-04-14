

import Head from 'next/head'



export default function Home() {
  let number = 30;
  console.log(number);
  return (
   <div>
    <Head>
      <title>Home | Next js</title>
    </Head>
    <h1>Hello next js</h1>
   </div>
  )
}
