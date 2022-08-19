import React, {useState} from "react";
import Style from './Styles/Nav.module.css';


export default function SearchBar({onSearch}) {

const [input, setInput] = useState("")
const handlerOnchange = (e) => {
  console.log(e)
  setInput(e.target.value)
};

  return <div className={Style.Main}>
    <form onSubmit={(e) => { 
    e.preventDefault();
    onSearch(input);
    setInput('')
    }}>
      
      <input name='input' onChange={handlerOnchange} type="text" placeholder="Ciudad..." value={input} className={Style.searchBar}/>
      <input type="submit" value="Agregar" className={Style.searchbtn}/>
    </form>
    </div>
};  