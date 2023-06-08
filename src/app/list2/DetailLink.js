'use client'

import { usePathname, useRouter, useSearchParams } from "next/navigation"

export default function DetailLink(){
  
  let router = useRouter()
  let nowPath = usePathname()
  console.log(nowPath)
  let params = useSearchParams();
  console.log(params)

  return(
    <div>
      <button style={{marginBottom:"10px"}} onClick={()=>{ router.push('/') }}>Home</button>
      {/* 
        <button onClick={()=>{ router.back() }}>back</button>
        <button onClick={()=>{ router.forward() }}>forward</button>
        <button onClick={()=>{ router.refresh() }}>refresh</button> //변동있는 html만 새로고침
         <button onClick={()=>{ router.prefetch('/detail/asd') }}>forward</button> 
         //detail/asd 페이지를 미리 로드(다운)할수있어 페이지이동시 빠른전환가능 
         Link 태그도 이미 prefecth하는 기능을 가지고있다 Link 태그 를 보는순간이미 로드하는 기능이 존재
      */}
    </div>
  )
}