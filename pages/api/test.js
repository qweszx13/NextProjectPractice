export default function handler(request, response){
  if( request.method == 'POST' ){
    return response.status(200).json("POST Hi!")
  }
  else{
    console.log(request.query)
    return response.status(200).json("GET Hi!")
  }
}