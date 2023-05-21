import { ObjectId } from "mongodb";
import { connectDB } from "../../../../util/database"

export default async function Detail(props){

  const db = (await connectDB).db("forum")
  let result = await db.collection("post").findOne({ _id : new ObjectId(props.params.id) })

  console.log(result);

  return(
    <div>
      <h4>Modify Page</h4>
      <form action="/api/put/new" method="POST">
        <input type="hidden" name="_id" defaultValue={result._id.toString()}></input>
        <input name="title" placeholder={result.title}></input>
        <input name="content" placeholder={result.content}></input>
        <button type="submit">modify</button>
      </form>
      
    </div>
  )
}