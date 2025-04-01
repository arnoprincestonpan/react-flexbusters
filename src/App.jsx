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
  const actionMovies = [
    {
      title: "Mad Max: Fury Road",
      image_url: "https://upload.wikimedia.org/wikipedia/en/6/6e/Mad_Max_Fury_Road.jpg?20171120224637",
      description: "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with the help of a group of female prisoners, a psychotic worshipper, and a drifter named Max Rockatansky.",
    },
    {
      title: "John Wick",
      image_url: "https://upload.wikimedia.org/wikipedia/en/9/98/John_Wick_TeaserPoster.jpg?20180105073428",
      description: "An ex-hitman comes out of retirement to seek revenge against the gangsters who killed his dog, a final gift from his wife.",
    },
    {
      title: "Die Hard",
      image_url: "https://upload.wikimedia.org/wikipedia/en/c/ca/Die_Hard_%281988_film%29_poster.jpg?20200708003525",
      description: "An NYPD officer tries to save his wife and several others taken hostage by German terrorists during a Christmas party at the Nakatomi Plaza in Los Angeles.",
    },
    {
      title: "The Dark Knight",
      image_url: "https://upload.wikimedia.org/wikipedia/en/1/1c/The_Dark_Knight_%282008_film%29.jpg?20170315171411",
      description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    },
    {
      title: "Mission: Impossible - Fallout",
      image_url: "https://upload.wikimedia.org/wikipedia/en/f/ff/MI_%E2%80%93_Fallout.jpg?20180531135511",
      description: "Ethan Hunt and his IMF team, along with some familiar allies, race against time after a mission gone wrong.",
    },
  ];
  const comedyMovies = [
    {
      title: "Superbad",
      image_url: "https://upload.wikimedia.org/wikipedia/en/9/9c/Superbad_Poster.jpg",
      description: "Two co-dependent high school seniors are forced to deal with separation anxiety as they approach graduation and college.",
    },
    {
      title: "The Hangover",
      image_url: "https://upload.wikimedia.org/wikipedia/en/b/b9/Hangover_ver3.jpg",
      description: "Three buddies wake up from a bachelor party in Las Vegas, with no memory of the previous night and the bachelor missing. They make their way around the city in order to find their friend before his wedding.",
    },
    {
      title: "Bridesmaids",
      image_url: "https://upload.wikimedia.org/wikipedia/en/e/e9/Bridesmaids_%282011_film%29_poster.jpg",
      description: "Competition between the maid of honor and a bridesmaid, who want to be the bride's best friend, threatens to ruin the engagement celebrations.",
    },
    {
      title: "Monty Python and the Holy Grail",
      image_url: "https://upload.wikimedia.org/wikipedia/en/9/98/Monty_Python_and_the_Holy_Grail_poster.jpg",
      description: "King Arthur and his Knights of the Round Table embark on a surreal, low-budget search for the Holy Grail.",
    },
    {
      title: "Shaun of the Dead",
      image_url: "https://upload.wikimedia.org/wikipedia/en/a/a6/Shaun_of_the_dead_poster.jpg",
      description: "A salesman decides to turn his life around by making amends with his girlfriend. He has to contend with the recent spillage of zombies onto London.",
    },
  ];
  const animeMovies = [
    {
      title: "Your Name.",
      image_url: "https://upload.wikimedia.org/wikipedia/en/0/0b/Your_Name_poster.png",
      description: "Two teenagers share a profound, magical connection upon discovering they are swapping bodies. But things get even more complicated when the boy and the girl decide to meet in person.",
    },
    {
      title: "Spirited Away",
      image_url: "https://upload.wikimedia.org/wikipedia/en/d/de/Spirited_Away_poster.JPG",
      description: "During her family's move to a new home, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.",
    },
    {
      title: "Akira",
      image_url: "https://upload.wikimedia.org/wikipedia/en/5/50/Akira_(1988_film).jpg",
      description: "A secret military project endangers Neo-Tokyo when it turns a biker gang member into a rampaging psychic psychopath that only two kids and a group of psionics can stop.",
    },
    {
      title: "Princess Mononoke",
      image_url: "https://upload.wikimedia.org/wikipedia/en/1/1a/Princess_Mononoke_Japanese_poster.jpg",
      description: "On a journey to find the cure for a Tatarigami curse, Ashitaka finds himself in the middle of a war between the forest gods and a mining colony.",
    },
    {
      title: "Weathering with You",
      image_url: "https://upload.wikimedia.org/wikipedia/en/0/06/Weathering_with_You_poster.jpg",
      description: "A high-school boy who has run away to Tokyo befriends a girl who appears to be able to manipulate the weather.",
    },
  ];
  return (
    <>
      <Navbar/>
      <CardList movies={actionMovies} genreTitle={"Action"}/>
      <CardList movies={horrorMovies} genreTitle={"Horror"}/>
      <CardList movies={comedyMovies} genreTitle={"Comedy"}/>
      <CardList movies={animeMovies} genreTitle={"Anime"}/>
      <Footer/>
    </>
  )
}

export default App
