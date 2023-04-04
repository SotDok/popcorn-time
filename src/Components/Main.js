import movies from "../data/movies.json";

import "./Main.css"

function Main(){


    


    return(
        <div className="Main">
            {movies.map( (moviesObj) => {
               return (
                <div key={moviesObj.id} className="card">
                    <h2>{moviesObj.title}</h2>
                    <h3>{moviesObj.year}</h3>
                    <h3>{moviesObj.rating}</h3>
                   
                 </div>
               )
            })}
        </div>
    )
          }
    


export default Main;



 