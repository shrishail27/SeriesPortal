import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
const Add = () => {
    let history=useHistory();
        let[Title,setTitle]=useState('')
        let[Genre,setGenre]=useState('')
        let[Cast,setCast]=useState('')
        let[language,setLanguage]=useState('')


    let handleSubmit=(e)=>{
        e.preventDefault();
        let data={Title,Genre,Cast,language};
        fetch(" http://localhost:7000/series", {
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify(data)
        })
        .then(()=>{
            alert('data added successfully')
            history.push('/favourites')
        })
        
    }
    return ( 
        <div className="div12">
        <div className="movies">
            <h1>Add movies</h1>
            <form onSubmit={handleSubmit} >
                <label htmlFor="">Title :</label> <br /> <input type="text" name="" id="title" value={Title} onChange={(e)=>{setTitle(e.target.value)}} /> <br />
                <label htmlFor="">Genre :</label> <br /> <input type="text" name="" id="genre" value={Genre} onChange={(e)=>{setGenre(e.target.value)}} /> <br />
                <label htmlFor="">Cast :</label> <br /> <input type="text" name="" id="cast" value={Cast} 
                onChange={(e)=>{setCast(e.target.value)}} /> <br />
                <label htmlFor="">Language :</label> <br /> <input type="text" name="" id="lang" value={language}onChange={(e)=>{setLanguage(e.target.value)}}/> <br />
                <button className="btn">Submit</button>    
            </form>
            
        </div>
        </div>
     );
}
 
export default Add;