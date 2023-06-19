import '../App.css'
import React from 'react'

   function Haq(props){
    const [isShown, setIsShown] = React.useState(false)
    const [butu,Setbutu]=React.useState("+")
    function toggleShown(){
        setIsShown(prevShown => !prevShown)
        Setbutu(isShown === true ? "+":"-")
    }
    return(
        <div className="faq">
            {props.setup && <h3>{props.setup}</h3>} <button onClick={toggleShown} className="faqBut">{butu}</button>
            <div className="answ">
            {isShown && <p>{props.punchline}</p>}
            </div>
            <hr />
        </div>
        
    );
};
  export default Haq;