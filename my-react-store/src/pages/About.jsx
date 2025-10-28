import "./About.css"
import {useState} from "react"
import {useContext} from "react"
import GlobalContext from "../state/globalContext"




function About(){
  const user = useContext(GlobalContext).user
  const[isEmailVisible, setIsEmailVisible] = useState(false)
  function hideEmailinfo(){
    setIsEmailVisible(false)
  }
  function showEmailInfo(){
    setIsEmailVisible(true)
  }

    return(
        <div className="text-center">
        <h1>Welcome to my online store!</h1>
           <div className="main-content">
        <h1>Ways to reach us!</h1>
        <p>(941)123-4567</p>
        <p>LetsgetWrenching@betterthensnap-on.com</p>
        <p>123 Allmymoney blvd, Orlando, FL, 34432</p>
      </div>
        <p>Id: {user.id}, name: {user.name}, cohort: {user.cohort}</p>
        { 
          isEmailVisible == true ?
           <p>Matemery123@gmail.com</p> 
           : <p>Click the button below to see my email address.</p>}
        

        <button onClick={showEmailInfo} className="btn">Show my email</button>
        <button onClick={hideEmailinfo} className="btn">Hide my email</button>
      </div>
    )

}

     
    


 export default About 