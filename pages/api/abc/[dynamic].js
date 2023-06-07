export default function handler(request, response){
  if( request.method == 'POST' ){
    return response.status(200).json("POST Hi!")
  }
  else{
    //URL 파라미터 문법을 사용해보자
    console.log(request.query)
    return response.status(200).json("GET Hi!")
  }
}