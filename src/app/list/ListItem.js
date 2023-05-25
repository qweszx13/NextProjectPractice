'use client'

import Link from "next/link"
import DetailLink from "./DetailLink"

export default function ListItem({result}){
  return (
    <div>
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
              <span onClick={()=>{
                fetch('/api/delete/new',{
                  method : 'DELETE', //PUT, DELETE, 정의안하면 GET 
                  body : post._id
                }).then(()=>{//get 요청
                  console.log("delete success");
                })
              }}>🗑</span>      
            </div>          
          )
        })
      }
    </div>
  )
}