 
import './App.css';
import {useState} from 'react'
import Values from 'values.js'
import Colors from './Colors';



function App() {


  const [color, setcolor] = useState("")
  const [list, setlist] = useState(new Values('#16a085').all(10))



  const handleSubmit=(event)=>{
    event.preventDefault();
    let colors = new Values(color).all(10)
    setlist(colors);
    console.log(color)
  }


  const  handleChange=(e)=>
  {
    setcolor(e.target.value)
  }
  return (
    <main>
      <div className="container">
       <h4>Color Generatorr</h4>
    <form onSubmit={handleSubmit}>
      <input type="text" id="color" onChange={handleChange} value={color} placeholder="#16a085"/>

       
       <button className="btn" type="submit">Generate</button>
    </form>


<section>
        {list.map((col, index)=>{

        return <Colors key={index} {...col} index={index} hexColor={col.hex} />
          
                 })}
 


</section>
      </div>
    </main>
  );
}

export default App;
