import FilterTab from '../../common/filterBar/filterTab';
import JobDetailer from '../../common/jobDetailer/jobDetailer';
import JobLister from '../../common/jobLister/jobLister';
import './jobs.css';

function Jobs() {
  return (
    <div className='jobs'>
        <FilterTab />
        <div className='jobs-content'>
          <JobLister />
          <JobDetailer />
        </div>
    </div>
  )
}

export default Jobs