import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function Forms() {
    const [form,setform]=useState({name:"",email:"",password:"",rep:"",sub:false})
    const [error,seterror]=useState("")
    function changer(e) {
        const {name,value}=e
        let newdis={...form,sub:false}
        newdis[name]=value
        setform(newdis)
    }
    const nav=useNavigate()
    const df=useRef()
    function op(){
        if (df.current.type=="password"){
            df.current.type="text"
        }
        else{
            df.current.type="password"
        }
        
    }
    function submit(){
        const mail=new RegExp('^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$')
        const special=new RegExp('(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}')
        let error={}
        if (!form.name){
            error.name="Enter name"
        }
        if (!form.email){
            error.email="Enter email"
        }
        if(!mail.test(form.email)){
            error.email="Enter email in a correct form"
        }
        if(!form.password){
            error.password="Enter the password"
        }
        if(form.password.length<10 || special.test(form.password)){
            error.password="Enter the password in correct form"
        }
        if (form.password!=form.rep || !form.rep){
            error.rep="password these not match"
        }
        seterror(error)
        setform({...form,sub:true})
        if(Object.keys(error)==0){
            console.log("going")
            setTimeout(() => {
                nav("/",{state:form.name})
            }, 5000);
        }
    }
    return(
        <div className="form">
        <div>
            <div className="serah">
                {Object.keys(error)==0 && form.sub?
                (<div className="green"><h2>Submited</h2><h3>Please Wait !</h3></div>)
                : form.sub && (<div className="red"><h3>Something is fishy🐟</h3></div>)}
            </div>
            <form>
                <label>Name:</label>

                <input placeholder="Name" 
                name="name" 
                value={form.name} 
                onChange={(e)=>changer(e.target)}/>

                <p>{error.name}</p>

                <label>Email:</label>

                <input placeholder="email" 
                name="email" 
                value={form.email} 
                onChange={(e)=>changer(e.target)}/>

                <p>{error.email}</p>

                <label>password:</label>

                <input placeholder="Password" 
                name="password" value={form.password} 
                type="password" ref={df} 
                onChange={(e)=>changer(e.target)}/>
                <p onClick={op}>👁️</p>

                <p>{error.password}</p>

                <label>Repeat Your Password:</label>

                <input placeholder="repeat your password" 
                name="rep" 
                value={form.rep} 
                onChange={(e)=>changer(e.target)}/>

                <p>{error.rep}</p>
            </form>
            <button onClick={submit} className="sub">Submit</button>
            </div>
            </div>
    )
}
export default Forms;