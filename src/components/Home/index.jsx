import Header from '../Header'
import Footer from '../Footer'
import HomeCard from '../HomeCard'
import './index.css'

const moviesList = [
  {
    id: 1,
    imageUrl:
      'https://i.ytimg.com/vi/qfwHsdgPz6o/maxresdefault.jpg',
    title: 'Mickey Mouse',
    duration: '2h 16m',
    genre: 'Kids • Comedy',
  },
  {
    id: 2,
    imageUrl:
      'https://tse3.mm.bing.net/th/id/OIP.960iWqwbCFSwENpz93rtXgHaFA?pid=Api&P=0&h=180',
    title: 'Tom Jerry',
    duration: '1h 55m',
    genre: 'Animation • Fun',
  },
  {
    id: 3,
    imageUrl:
      'https://tse3.mm.bing.net/th/id/OIP.aLNfksiahj1T1u4WB5w58gHaEK?pid=Api&P=0&h=180',
    title: 'Dragons World',
    duration: '2h 05m',
   genre: 'Kids • Adventure',
  },
  {
    id: 4,
    imageUrl:
      'https://i.ytimg.com/vi/tYn8NCOJ86w/maxresdefault.jpg',
    title: 'Mummies',
    duration: '2h 40m',
     genre: 'Adventure • Fantasy',
  },
  {
    id: 5,
    imageUrl:'https://i.ytimg.com/vi/LT0bvxtNHPU/maxresdefault.jpg',
    title:'Dora',
    duration:'2h 40m',
    genre: 'Kids • Family',
  },
  {
  id: 6,
  imageUrl:
    'https://i.ytimg.com/vi/Xpm7URf-Jb8/maxresdefault.jpg',
  title: 'Adventure Kids',
  duration: '2h 40m',
  genre: 'Kids • Family',
},
{
  id: 7,
  imageUrl:
    'https://i.ytimg.com/vi/UVTZI-x-K1Q/maxresdefault.jpg',
  title: 'Funny Cartoon',
  duration: '2h 40m',
  genre: 'Comedy • Kids',
},
{
  id: 8,
  imageUrl:
    'https://tse4.mm.bing.net/th/id/OIP.GSwAcvZhZZ3Iuak1G6_vDgHaDf?pid=Api&P=0&h=180',
  title: 'Magic World',
  duration: '2h 40m',
  genre: 'Fantasy • Family',
},
{
  id: 9,
  imageUrl:
    'https://i.ytimg.com/vi/LDDRtS0h7oc/maxresdefault.jpg',
  title: 'Kids Adventure',
  duration: '2h 40m',
  genre: 'Adventure • Fun',
},
{
  id: 10,
  imageUrl:
    'https://i.ytimg.com/vi/bYCg5HZuRRk/maxresdefault.jpg',
  title: 'Kids Adventure',
  duration: '2h 40m',
  genre: 'Adventure • Fun',
},
{
  id: 11,
  imageUrl:'https://img.youtube.com/vi/Qm-wNxOcEL4/maxresdefault.jpg',
  title:'Mass Jathara',
  duration: '2h 40m',
  genre:'Action • Drama',
},
{
  id: 12,
  imageUrl:'https://img.youtube.com/vi/XgLlPN7oxwY/maxresdefault.jpg',
  title:'The Girl Friend',
  duration: '2h 40m',
  genre:'Action • Drama',
},
{
  id: 13,
  imageUrl:'https://img.youtube.com/vi/uwcb4CnAbgQ/maxresdefault.jpg',
  title:'Jatadhara',
  duration: '2h 40m',
  genre:'Fantasy • Thriller',
},
{
  id: 14,
  imageUrl:'https://tse1.mm.bing.net/th/id/OIP.2lQtky_pv1FKV2QFyQ1v6wHaEK?pid=Api&P=0&h=180',
  title:'Adhikeshava',
  duration:  '2h 40m',
  genre:'Action • Romance',
},
{
  id: 15,
  imageUrl:'https://img.youtube.com/vi/NfsTxYtBiWg/maxresdefault.jpg',
  title:'RobinHood',
  duration:  '2h 40m',
  genre:'Action • Comedy',

},
  
]
const Home = () => {
  return (
    <>
      <Header />
      <div className="home-banner">
        <div className="banner-content">
          <h1 className="banner-title">Dora and the Magical Adventure</h1>
          <p className="banner-description">
             Join Dora and her friends on an exciting journey
             filled with fun, mystery, friendship, and magical
             adventures across colorful worlds.</p>
            <div className="banner-buttons">
               <button className="play-btn">▶ Play</button>
               <button className="info-btn">More Info</button>
           </div>
        </div>
        </div>
       <div className="home-page">
            <h3 className="heading">Funny Movies</h3>

             <div className="movies-container">
                {moviesList.map(eachMovie => (
                <HomeCard
                key={eachMovie.id}
                movieDetails={eachMovie} />
        ))}
      </div>
      </div>
      <Footer />
    </>
  )
}

export default Home