import React from "react";
import "./technology.css"
import { useState } from "react";
import data from "../starter-code/data.json"

export default function Technology(){
     const [technology]=useState(data.technology)
     const [value,setValue]=useState(0)

     const {name,images,description}=technology[value]
    return(
        <>
        <section className="technolog-main-container">
            <h1>Space Launch</h1>
           <div className="flex-container-technology">
               <article className="technology-container1">
               <ul className="technologyul">
              {technology.map((item, index) => (
                <li key={index} className="technology-list">
                  <button
                    onClick={() => setValue(index)}
                    
                   className="btn-technology"
                  >
                 
                    {item.name}
                     
                  </button>
                </li>
              ))}
              </ul>
               </article>
               <article className="technology-container2">
                   <p>The Terminology</p>
                   <h1>{name}</h1>
                   <p>{description}</p>
               </article>
               <article className="technology-container3">
                    <img src={images.portrait} alt={name} width="400px" height="400px"/>
               </article>
           </div> 
        </section>
        </>
    )
}