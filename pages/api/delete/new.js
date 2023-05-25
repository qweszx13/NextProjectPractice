import { connectDB } from "../../../util/database";

export default async function handler(request, response){
  //console.log(request.body);

  if(request.method == "DELETE"){
    if(request.body._id === '')
      return response.status(500).json("null id");
    
    try{
      const db = (await connectDB).db("forum");
      let result = await db.collection('post').deleteOne(request.body._id);
      return response.redirect(302, '/list')
    }catch(exception){
      return response.json(exception);
    }
  }
}