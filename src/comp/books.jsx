import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import balaya from '../assets/no.jpg'
function Books() {
    const [books,setbooks]=useState([])
    const [book,setbook]=useState("")
    const [load,setload]=useState(true)
    const nav=useNavigate()
    useEffect(()=>{
        axios.get("https://reactnd-books-api.udacity.com/books",{headers:{"Authorization":"Vamsi"}})
        .then((r)=>{
            setbooks(r.data.books)
            setload(false)
        })
    },[])
    const loc=useLocation()
    const name=loc.state||"User"
    console.log(books)
    function changer(e) {
        setbook(e)
        
    }
    return(
        <>

        <div className="nav">
        <img src={balaya} className="bala"/>
            <h2>Welcome {name}!😎</h2>
            <button onClick={()=>nav("/register")} className="reg">Register</button>
        </div>
        <div className="serah"><input value={book} placeholder="🔍Search" onChange={(e)=>changer(e.target.value)} className="input"/></div>
    <div className="self">
        <div className="bookself">
        {!load?books.filter((i)=>{return i.title.toLowerCase().startsWith(book) || i.title.toLowerCase().includes(book)}).map((i)=>{
            return(
                <div key={i.id} className="book">
                <img src={i.imageLinks.smallThumbnail}/>
                <h3>{i.title}</h3>
                <p className="grey">{i.subtitle||"Good Book"} ⭐{i.averageRating?i.averageRating:0}({i.ratingsCount?i.ratingsCount:0})</p>
                {/* <p></p> */}
                <a href={i.previewLink} target="_blank"><button className="read">Read now📖</button></a>
                </div>
            )
        }):(<h1>loading</h1>)}
        </div>
    </div>
        </>

    )
    
}
export default Books;