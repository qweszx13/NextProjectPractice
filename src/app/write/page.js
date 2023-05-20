export default function Write(){
  return(
    <div className="p-20">
      <h4>content write</h4>
      <form action="/api/post/new" method="POST">
        <input name="title" placeholder="title"></input>
        <input name="content" placeholder="content"></input>
        <button type="submit">button</button>
      </form>
    </div>
  )
}