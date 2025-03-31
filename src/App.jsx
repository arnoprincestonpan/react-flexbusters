import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CardList from "../components/CardList";

function App() {
  const horrorMovies = [
    {
      title: "The Babadook",
      image_url:
        "https://upload.wikimedia.org/wikipedia/en/d/d7/The-Babadook-Poster.jpg",
      description:
        "A single mother and her child find a disturbing children's book in their home, and its presence soon manifests into a terrifying entity.",
    },
    {
      title: "Hereditary",
      image_url:
        "https://upload.wikimedia.org/wikipedia/en/d/d9/Hereditary.png?20180626111128",
      description:
        "Following the death of their secretive grandmother, a family begins to unravel terrifying secrets and face a horrifying fate.",
    },
    {
      title: "The Witch",
      image_url:
        "https://upload.wikimedia.org/wikipedia/en/b/bf/The_Witch_poster.png",
      description:
        "In 1630s New England, a devout family is torn apart by suspicion and terror when their newborn son vanishes and their crops fail.",
    },
    {
      title: "It Follows",
      image_url:
        "https://upload.wikimedia.org/wikipedia/en/9/9e/It_Follows_%28poster%29.jpg?20220622213407",
      description:
        "A young woman is cursed with a supernatural entity that relentlessly pursues her after a sexual encounter.",
    },
    {
      title: "The Conjuring",
      image_url:
        "https://upload.wikimedia.org/wikipedia/en/8/8c/The_Conjuring_poster.jpg?20221201100310",
      description:
        "Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse.",
    },
    {
      title: "A Quiet Place",
      image_url:
        "https://upload.wikimedia.org/wikipedia/en/a/a0/A_Quiet_Place_film_poster.png?20180929162316",
      description:
        "In a post-apocalyptic world, a family must live in silence to avoid terrifying creatures with an acute sense of hearing.",
    },
    {
      title: "Get Out",
      image_url:
        "https://upload.wikimedia.org/wikipedia/en/a/a3/Get_Out_poster.png?20241015000137",
      description:
        "A young African-American man visits his white girlfriend's family estate and discovers a sinister and disturbing secret.",
    },
    {
      title: "Sinister",
      image_url:
        "https://upload.wikimedia.org/wikipedia/en/f/f8/SinisterMoviePoster2012.jpg?20240213212356",
      description:
        "A true crime writer finds a box of home movies in his new house that depict grisly murders, leading him and his family into danger.",
    },
    {
      title: "The Shining",
      image_url:
        "https://upload.wikimedia.org/wikipedia/en/1/1d/The_Shining_%281980%29_U.K._release_poster_-_The_tide_of_terror_that_swept_America_IS_HERE.jpg?20250121000429",
      description:
        "A family heads to an isolated hotel for the winter where a sinister presence influences the father into violence, while his psychic son sees horrific premonitions.",
    },
    {
      title: "Insidious",
      image_url:
        "https://upload.wikimedia.org/wikipedia/en/2/2d/Insidious_poster.jpg?20241112122604",
      description:
        "A family seeks to help their comatose son, only to discover that his condition is the result of a demonic possession.",
    },
  ];
  return (
    <>
      <Navbar/>
      <CardList horrorMovies={horrorMovies}/>
      <Footer/>
    </>
  )
}

export default App
