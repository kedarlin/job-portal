import './applicationCard.css';
import RQLogo from '../../../assets/rq_logo.png';

const ApplicationCard = () => {
  return (
    <div className='applicationcard'>
        <div className='applicationcard-left'>
            <img src={RQLogo} alt='applicationcard-logo' className='applicationcard-logo' />
        </div>
        <div className='applicationcard-right'>
            <div className='applicationcard-title'>Full Stack Developer</div>
            <div className='applicationcard-registered-date'>
                Registered on :
                <span style={{color: "#666"}}>18 Dec 2024, 12.00 AM IST</span>
            </div>
            <div className='applicationcard-deadline'>
                Deadline : 
                <span style={{color: "#666"}}>31 Dec 2024, 11:59 PM IST</span>
            </div>
        </div>
        <div className='applicationcard-status'>
            Pending
        </div>
    </div>
  )
}

export default ApplicationCard