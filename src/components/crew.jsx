import React from "react";
import "./crew.css"
import { useState } from "react";
import data from "../starter-code/data.json"

export default function Crew(){
    const [crew] = useState(data.crew)
    const [value, setValue] = useState(1)

    const title="Meet Your Crew"
    const { name, images, role,bio } = crew[value]
    return(
        <>
        <section className="crew-main-container">
         <artile className="crewcontainer1">
        
          <h1 className="crewtitle">{title}</h1>
           <div className="crewinfo">
            <h1>{name}</h1>
            <p>{role}</p>
            <p>{bio}</p>
           </div>
           <ul className="ul-list-crew">
              {crew.map((item, index) => (
                <li key={index} className="crewlist">
                  <button
                    onClick={() => setValue(index)}
                    
                   className="btn-crew"
                  >
                 
                    {item.name}
                     
                  </button>
                </li>
              ))}
            </ul>
         </artile>
          <article className="crewimage">
              <img src={images.png} alt={name} width="235px" height="300px"/>
             
          </article>
          
        </section>

        </>
    )
}