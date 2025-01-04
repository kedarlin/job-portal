import { useState } from 'react'
import JobCard from '../jobCard/jobCard'
import './jobLister.css'

const JobLister = () => {
  const [selectedJobCard, setSelectedJobCard] = useState<number>(0);

  return (
    <div className="joblister">
      {[...Array(8)].map((_, index) => (
        <JobCard
          key={index}
          index={index}
          isSelected={selectedJobCard === index}
          onSelect={() => setSelectedJobCard(index)}
        />
      ))}
    </div>
  )
}

export default JobLister