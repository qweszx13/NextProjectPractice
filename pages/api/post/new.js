import { getServerSession } from "next-auth";
import { connectDB } from "../../../util/database";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(request, response){
  //console.log(request.body);

  if(request.method == "POST"){
    if(request.body.title === '' && request.body.content === '')
      return response.status(500).json("null input");
    
    try{
      let session = await getServerSession(request, response, authOptions);
      if(session){
        request.body.author = session.user.email
        const db = (await connectDB).db("forum");
        let result = await db.collection('post').insertOne(request.body);
        return response.redirect(302, '/list')
      }else{
        return response.redirect(404, '/list')
      }

      
    }catch(exception){
      return response.json(exception);
    }
  }
}