import Navbar from '../components/common/navbar/navbar'
import Watchlist from '../components/layout/watchlist/watchlist'
import Footer from '../components/common/footer/footer'

const WatchlistPage = () => {
  return (
    <div className='watchlistPage'>
        <Navbar />
        <Watchlist />
        <Footer />
    </div>
  )
}

export default WatchlistPage