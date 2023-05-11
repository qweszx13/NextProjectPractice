import { ObjectId } from "mongodb";
import { connectDB } from "../../../../util/database"

export default async function Detail(props){

  const db = (await connectDB).db("forum")
  let result = await db.collection("post").findOne({ _id : new ObjectId(props.params.id) })

  console.log(result);

  return(
    <dib>
      <h4>Detail Page</h4>
      <h4>{result.title}</h4>
      <p>{result.content}</p>
    </dib>
  )
}