import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MovieShelf from "../components/MovieShelf";
import MovieFetcher from "../components/MovieFetcher";

function App() {

  return (
    <>
      <Navbar/>
      <MovieFetcher/>
      <MovieShelf/>
      <Footer/>
    </>
  )
}

export default App
