import React,{useState, useEffect} from 'react'

export default function Colors({index,rgb, weight,  hexColor}) {
  const [alert, setalert] = useState(false)
  useEffect(() => {
    const timeout = setTimeout(() => {
      setalert(false)
    }, 2000)
    return () => clearTimeout(timeout)
  }, [alert])
    return (
        <article className={`colorCard ${index > 10 && 'color-light'}`}
        onClick={()=>{
            navigator.clipboard.writeText(`#${hexColor}`)
                setalert(true);
        }}
        style={{backgroundColor: `#${hexColor}`  }}>
                     <h4 className="color-value"> #{hexColor} </h4>   
                       <h4 className="weight">  {weight} %  </h4>  
                       {alert && <p>  {alert} Copied to clipboard </p>}
        </article>
        
    )
}
