export default function handler(request, response){
  
  const time = Date();

  if(request.method == "GET"){
    return response.status(200).json(time);
  }
}