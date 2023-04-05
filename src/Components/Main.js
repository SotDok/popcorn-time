
import Movie from './Movie';



import "./Main.css"

function Main(props){



// let title;
// if(props.moviesArr.length > 1){
//     title = <h1>We have {props.moviesArr.length} movies</h1>;
// } else if(props.moviesArr.length === 1){
//     title = <h1>We have 1 movie</h1>;
// } else {
//     title = <h1>Sorry, no movies to display</h1>;
// }

return (
  <div className="Main">

  {/* <h1>We have {moviesArr.length} movies</h1> */}

  {props.moviesArr.map( (movieObj, index) => {
    return <Movie key={index} movieDetails={movieObj} callbackToDelete={props.callbackToDelete}  />
  })}
  </div>
  )
 }


export default Main;



 