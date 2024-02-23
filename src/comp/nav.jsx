import { Link, useNavigate } from 'react-router-dom'
import balaya from '../assets/no.png'
function Nav(prop){
const nav=useNavigate()
    return(
    <div className="nav">
    <Link to={'/'}><h2 style={{color:"red"}}>Kalvium</h2></Link>
        <h2>Welcome {prop.name}!😎</h2>
        <button onClick={()=>nav("/register")} className="reg">Register</button>
    </div>
    )   
}
export default Nav;