import FilterTab from '../../common/filterBar/filterTab';
import JobDetailer from '../../common/jobDetailer/jobDetailer';
import JobLister from '../../common/jobLister/jobLister';
import './internships.css';

function Internships() {
  return (
    <div className='internships'>
        <FilterTab />
        <div className='internships-content'>
          <JobLister />
          <JobDetailer />
        </div>
    </div>
  )
}

export default Internships