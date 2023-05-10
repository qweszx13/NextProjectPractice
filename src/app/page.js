import { connectDB } from "../../util/database"


export default async function Home() {

  const clinet =  await connectDB
  const db = clinet.db('forum')
  const result = await db.collection('post').find().toArray()
  console.log(result)

  db.collection

  return (
    <div>
      Hello World!
    </div>
  )
}
