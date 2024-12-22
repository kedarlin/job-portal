import Navbar from '../components/common/navbar/navbar'
import Landing from '../components/layout/landing/landing'
import Footer from '../components/common/footer/footer'

const LandingPage = () => {
  return (
    <div className='landingpage'>
        <Navbar />
        <Landing />
        <Footer />
    </div>
  )
}

export default LandingPage