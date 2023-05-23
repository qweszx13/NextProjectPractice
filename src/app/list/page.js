import Link from "next/link"
import { connectDB } from "../../../util/database"
import DetailLink from "./DetailLink"
import ListItem from "./ListItem"

export default async function List() {

  const db = (await connectDB).db("forum")
  let result = await db.collection('post').find().toArray()

  return (
    <div className="list-bg">
      <ListItem result={result}></ListItem>
    </div>
  )
} 