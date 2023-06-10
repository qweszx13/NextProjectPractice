'use client'

import Link from "next/link"
import DetailLink from "./DetailLink"

export default function ListItem({result}){
  return (
    <div>
      {
        result.map((post, index)=>{
          return(            
            <div className="list-item" key={"list"+index}>
              <Link prefetch={false} href={"/detail/"+post._id}  key={index}>              {/* prefetch 기능 끄기 */}
                <h4>{post.title}</h4>
                <p>1M 1D</p>
              </Link>              
              <DetailLink></DetailLink>
              <Link prefetch={false} href={"/modify/"+post._id}  key={"modify"+index}>              {/* prefetch 기능 끄기 */}
                <button>Modify</button>
              </Link>
              <span onClick={(e)=>{
                fetch('/api/delete/new',{
                  method : 'DELETE', //PUT, DELETE, 정의안하면 GET 
                  body : post._id
                }).then((r)=>{
                  if(r.status == 200) {
                    return r.json()
                  } else {
                    //서버가 에러코드전송시 실행할코드
                  }
                }).then(()=>{
                  e.target.parentElement.style.opacity = 0
                  setTimeout(() => {
                    e.target.parentElement.style.display = 'none'
                  }, 1000);
                })
                .then((result)=>{ 
                  console.log("성공시 실행할코드");
                  console.log(result);
                }).catch((error)=>{
                  console.log("인터넷문제 등으로 실패시 실행할코드");
                  console.log(error)
                })          
              }}
              key={"delete"+index}>🗑</span>      
            </div>          
          )
        })
      }
    </div>
  )
}