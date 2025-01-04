import Footer from "../components/common/footer/footer"
import Navbar from "../components/common/navbar/navbar"
import Internships from "../components/layout/internships/internships"


const InternshipsPage = () => {
  return (
    <div className="internshipspage">
        <Navbar />
        <Internships />
        <Footer />
    </div>
  )
}

export default InternshipsPage