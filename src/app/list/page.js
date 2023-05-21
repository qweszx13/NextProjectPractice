import Link from "next/link"
import { connectDB } from "../../../util/database"
import DetailLink from "./DetailLink"

export default async function List() {

  const db = (await connectDB).db("forum")
  let result = await db.collection('post').find().toArray()

  return (
    <div className="list-bg">
      {
        result.map((post, index)=>{
          return(            
            <div className="list-item">
              <Link prefetch={false} href={"/detail/"+post._id}  key={index}>              {/* prefetch 기능 끄기 */}
                <h4>{post.title}</h4>
                <p>1M 1D</p>
              </Link>              
              <DetailLink></DetailLink>
              <Link prefetch={false} href={"/modify/"+post._id}  key={"modify"+index}>              {/* prefetch 기능 끄기 */}
                <button>Modify</button>
              </Link>      
            </div>          
          )
        })
      }
    </div>
  )
} 