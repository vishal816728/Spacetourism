import { useState } from "react"
import data from "../starter-code/data.json"
import "./destination.css"

export default function Destination() {
  const [planets] = useState(data.destinations)
  const [value, setValue] = useState(0)

  const { name, images, description, distance, travel } = planets[value]

  return (
    <>
      <section className="destination-container">
        <div>
          <article className="container11">
            <h2>
              <span>Pick your destination</span>
            </h2>

            <img
              src={images.png}
              alt={name}
              title={name}
              width="300px"
              height="300px"
            />
          </article>

          <article className="container22">
            <ul className="listul" >
              {planets.map((item, index) => (
                <li key={index} className="listtt">
                  <button
                    onClick={() => setValue(index)}
                    
                   className="btn-destination"
                  >
                 
                    {item.name}
                     
                  </button>
                </li>
              ))}
            </ul>
            <div className="container33">
            <h2 className="destinationname">
              {name}
            </h2>

            <p className="destinationdescription">
              {description}
            </p>

            <ul className="destinationdetails">
              <li >
                Avg. Distance<span >{distance}</span>
              </li>
              <li >
                Est. travel time<span >{travel}</span>
              </li>
            </ul>
            </div>
          </article>
        </div>
      </section>
    </>
  )
}