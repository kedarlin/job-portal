import Footer from "../components/common/footer/footer"
import Navbar from "../components/common/navbar/navbar"
import Profile from "../components/layout/profile/profile"

const ProfilePage = () => {
  return (
    <div className="profilepage">
        <Navbar />
        <Profile />
        <Footer />
    </div>
  )
}

export default ProfilePage