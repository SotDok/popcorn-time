import { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Main from './Components/Main'
import moviesFromJson from "./data/movies.json";


function App() {

  
  const [moviesArr, setMoviesArr] = useState(moviesFromJson);


  const [title, setTitle] = useState("")
  const [rating, setRating] = useState("")
  const [imgURL, setImgURL] = useState("")
  

  const deleteMovie = (movieTitle) => {
      console.log("deleting movie...", movieTitle)
    const newList = moviesArr.filter( (movieDetails) => {
      if(movieDetails.title !== movieTitle){
        return true;
      } else {
        return false;
      }
    });

    // 2nd option
    // const newList = moviesArr.filter( movieDetails => movieDetails.title !== movieTitle );

    setMoviesArr(newList);
  }

  const handleSubmit = (e) => {
    console.log("submitting form....")
    e.preventDefault();

    const newMovie = {
      title: title,
      rating: rating,
      imgURL: imgURL
    };

  
    setMoviesArr((prevMoviesArr) => {
      const newList = [newMovie, ...prevMoviesArr];
      return newList;
    })


    //Second option: 
    // const newList = [newMovie, ...moviesArr];
    // setMoviesArr(newList);

    //clear form
    setTitle("");
    setRating("");
    setImgURL("");
  }

  return (
    <div className="App">
      <Header numberOfMovies={moviesArr.length}/>

      <section>
        <form onSubmit={handleSubmit}>

        <label>
        Title:
          <input type="text" name="title" value={title} onChange={(e) => { setTitle(e.target.value)}}/>
          </label>

          <label>
          Rating:
          <input type="number" name="rating" value={rating} onChange={(e) => { setRating(e.target.value)}} min="0" max="10"/>
          </label>

          <label>
          Image Url:
          <input type="text" name="imgURL" value={imgURL} onChange={(e) => { setImgURL(e.target.value)}} alt="" src=""/>
          </label>

          <button>Create</button>
        </form>
      </section>

      <Main moviesArr={moviesArr} callbackToDelete={deleteMovie} />
      <Footer />
    </div>
  );
}

export default App;
