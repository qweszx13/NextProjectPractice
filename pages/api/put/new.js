import { ObjectId } from "mongodb";
import { connectDB } from "../../../util/database";

export default async function handler(request, response){
  console.log(request.body);

  if(request.method == "POST"){
    if(request.body.title === '' && request.body.content === '')
      return response.status(500).json("null input");
    
    let changeObject = {
      title : request.body.title, 
      content : request.body.content
    };

    try{
      const db = (await connectDB).db("forum");
      await db.collection('post').updateOne({_id : new ObjectId(request.body._id)}, {$set : changeObject});
      return response.redirect(302, '/list')
    }catch(exception){
      console.log(exception)
    }
  }
}