import { connectDB } from "../../../util/database"
import ListItem from "./ListItem"

export const dynamic = 'force-dynamic' //  페이지를 다이나믹으로 바꿔줌

export default async function List() {

  const db = (await connectDB).db("forum")
  let result = await db.collection('post').find().toArray()

  return (
    <div className="list-bg">
      <ListItem result={result}></ListItem>
    </div>
  )
} 