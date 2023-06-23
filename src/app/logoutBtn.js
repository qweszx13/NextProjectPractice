'use client'

import { signOut } from 'next-auth/react';

export default function LogoutBtn(props){

  return(
    <div>
      <img src={props.image.user.image} style={{width:'54px', height:'54px'}}></img>
      <button onClick={()=>{ signOut() }}>로그아웃</button>
    </div>
  )
}