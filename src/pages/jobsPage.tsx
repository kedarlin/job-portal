import Navbar from "../components/common/navbar/navbar"
import Jobs from "../components/layout/jobs/jobs"


const JobsPage = () => {
  return (
    <div className='jobspage'>
        <Navbar />
        <Jobs />
        <Navbar />
    </div>
  )
}

export default JobsPage