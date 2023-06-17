import '../App.css'
import imago from '../images/lgbtq-activists.jpg'
function Home()
{
 
    return(
        <div className="flag">
            <h1>Welcome to our Website</h1>
            <img src={imago} alt="" className="imago"/>
        </div>
    )
}
export default Home;