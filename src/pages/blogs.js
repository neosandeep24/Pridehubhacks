import blogdata from "./blogdata";
import '../App.css'

function Blogss(props){
  return(
    <div className="Cards">
      <h3>{props.name}</h3>
      <a href={props.link}><img src={props.url} alt=""/></a>
    </div>
  )
}

const a=blogdata.map(b=>{
  return(
    <Blogss
    {...b}
    />
  )
})

function Blog()
{
  return(
    <div>
      <h1 className="headB">BLOGS</h1>
    <div className="Blogs">
      {a}
    </div>
    </div>
  )
}
  export default Blog;