import { FaUserGroup } from 'react-icons/fa6';
import { FaClock } from 'react-icons/fa';
import RQLogo from '../../../assets/rq_logo.png';
import './jobCard.css';

interface JobCardProps {
  index: number;
  isSelected: boolean;
  onSelect: () => void;
}

const JobCard= ({ isSelected, onSelect }: JobCardProps) => {
  return (
    <div
      className="jobcard"
      onClick={onSelect}
      style={{ borderLeftColor: isSelected ? '#0073e6' : '#ffffff00' }}
    >
      <div className="jobcard-wrap">
        <div className="jobcard-left">
          <img src={RQLogo} alt="jobcard-company-logo" className="jobcard-logo" />
        </div>
        <div className="jobcard-right">
          <div className="jobcard-title">Full Stack Developer</div>
          <div className="jobcard-company">Rootquotient</div>
          <div className="jobcard-details">
            <div className="jobcard-applications">
              <FaUserGroup />
              200 Applied
            </div>
            <div className="jobcard-lastdate">
              <FaClock />
              10 days left
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;