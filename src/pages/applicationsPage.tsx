import Footer from "../components/common/footer/footer"
import Navbar from "../components/common/navbar/navbar"
import Applications from "../components/layout/applications/applications"


const ApplicationsPage = () => {
  return (
    <div className="applicationspage">
        <Navbar />
        <Applications />
        <Footer />
    </div>
  )
}

export default ApplicationsPage