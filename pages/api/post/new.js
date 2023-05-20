import { connectDB } from "../../../util/database";

export default async function handler(request, response){
  //console.log(request.body);

  if(request.method == "POST"){
    if(request.body.title === '' && request.body.content === '')
      return response.status(500).json("null input");
    
    try{
      const db = (await connectDB).db("forum");
      let result = await db.collection('post').insertOne(request.body);
      return response.redirect(302, '/list')
    }catch(exception){
      return response.json(exception);
    }
  }
}