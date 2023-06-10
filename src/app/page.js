import { connectDB } from "../../util/database"

// export const revalidate = 60; //60초마다 캐싱 갱신된다 ISR 이라고도함

export default async function Home() {

  const clinet =  await connectDB
  const db = clinet.db('forum')
  const result = await db.collection('post').find().toArray()
  console.log(result)

  // await fetch('URL', {cache : 'force-cache'}) //caching 기능 사용 패치에 기본으로 설정되어있음
  // await fetch('URL', {cache : 'no-store'}) //caching 기능 사용안하고 매번 서버에 새로운 요청해서 새거 가져옴
  // await fetch('URL', {next : {revalidate : 60}}) //60 초마다 캐싱된 데이터를 갱신해준다.
  // //캐싱된 데이터는 하드용량을 차지함으로 주의하도록 하자
  //하지만 위처럼 디비연결사용을 이용하면 그냥 fetch 함수로 바꾸거나 예약어를 이용할수있는데 예약어 revalidate 를 사용할수있다.


  db.collection

  return (
    <div>
      Hello World!
    </div>
  )
}
