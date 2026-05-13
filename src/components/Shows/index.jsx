import Header from '../Header'
import Footer from '../Footer'
import ShowsCard from '../ShowsCard'
import './index.css'

const showsList = [
  {
    id: 1,
    imageUrl:
      'https://img.airtel.tv/unsafe/fit-in/1600x0/filters:format(webp)/https://xstreamcp-assets-msp.streamready.in/assets/HOTSTAR_DTH/SERIES/650b28a7d32b1d6806c748ac/images/1736166109809-h?o=production',
    title: 'Adivaram Parivaram',
    duration: '1h 16m',
  },
  {
    id: 2,
    imageUrl:
      'https://img1.hotstarext.com/image/upload/f_auto/sources/r1/cms/prod/4389/1757145764389-i',
    title: 'Cooku With Jathirathnalu',
    duration: '56m',
  },
  {
    id: 3,
    imageUrl:
      'https://totalreporter.com/wp-content/uploads/2025/08/Bigg-Boss-Telugu-Season-9-Voting.jpg',
    title: 'Big Boss',
    duration: '1h 10m',
  },
  {
    id: 4,
    imageUrl:
      'https://d2zfbyesi0qka0.cloudfront.net/wp-content/uploads/2024/12/ismart-jodi.jpg',
    title: 'Ishmart Jodi',
    duration: '54m',
  },
  {
    id: 5,
    imageUrl:
      'https://i.ytimg.com/vi/qfwHsdgPz6o/maxresdefault.jpg',
    title: 'Magic Show',
    duration: '1h 5m',
  },
  {
    id: 6,
    imageUrl:
      'https://i.ytimg.com/vi/g07rdlntgfs/hqdefault.jpg',
    title: 'Pove Pora',
    duration: '1h',
  },
  {
    id: 7,
    imageUrl:
      'https://images.ottplay.com/images/mad-for-each-other-ott-release-date-1772353102.jpg',
    title: 'Mad For Eachother',
    duration: '1h 50m',
  },
  {
    id: 8,
    imageUrl:
      'https://tse4.mm.bing.net/th/id/OIP.Scg6Yes-veby8BKGD2XA-AHaEK?pid=Api&P=0&h=180',
    title: 'Sridevi drama',
    duration: '1h 01m',
  },
  {
    id: 9,
    imageUrl:
      'https://tse1.mm.bing.net/th/id/OIP.eYMgLexvukX-CkNC70J2lgHaEK?pid=Api&P=0&h=180',
    title: 'Suma adda',
    duration: '45m',
  },
  {
    id: 10,
    imageUrl:
      'https://tse4.mm.bing.net/th/id/OIP.0-nNMESXvN3n-d1RXGD7tgHaEK?pid=Api&P=0&h=180',
    title: 'Jabardhast',
    duration: '59m',
  },
]

const Shows = () => {
  return (
    <>
      <Header />

      <div className="shows-page">
        <h3 className="heading">Popular Shows</h3>

        <div className="shows-container">
          {showsList.map(eachShow => (
            <ShowsCard
              key={eachShow.id}
              movieDetails={eachShow}
            />
          ))}
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Shows