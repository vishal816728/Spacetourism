import react from "react"
import { Link } from "react-router-dom";
import './App.css';


function App() {
  return (
  <div>  
   <section className="home"> 
       <div className="overlay">
         <div className="container1">
          <h1>So you want to Travel to <span className="space">SPACE</span></h1>
          <p>Let us face it that it is the time to genuinely not only go to the outer space but also explore the wonders of other planets.</p>
        </div>

    <article>
        <button>
          <Link to="/Destination" className="explore">Explore</Link>
        </button>
    </article>
    </div>
    </section> 
    </div>
  );
}

export default App;
