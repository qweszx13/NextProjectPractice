import Link from "next/link"
import { connectDB } from "../../../util/database"

export default async function List() {

  const db = (await connectDB).db("forum")
  let result = await db.collection('post').find().toArray()

  return (
    <div className="list-bg">

      {
        result.map((post, index)=>{
          return(
            <Link href={"/detail/"+post._id}  key={index}>
              <div className="list-item">              
                <h4>{post.title}</h4>
                <p>1M 1D</p>              
              </div>
            </Link>
          )
        })
      }
    </div>
  )
} 