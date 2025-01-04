import { BsBag } from "react-icons/bs";
import "./signup.css";
import { FaGraduationCap } from "react-icons/fa";
import { FaBuildingColumns } from "react-icons/fa6";
import { useState } from "react";

const SignupDetails = () => {
  enum userTypesEnum {
    CollegeStudent = "CollegeStudent",
    Fresher = "Fresher",
    Professional = "Professional",
  }

  const [userType, setUserType] = useState<userTypesEnum>();

  return (
    <div className="signupdetails">
      <div className="signupdetails-inputbox">
        <label>User Type</label>
        <div className="signupdetails-users">
          <div
            className={`signupdetails-user ${
              userType === userTypesEnum.CollegeStudent ? "selected" : ""
            }`}
            onClick={() => setUserType(userTypesEnum.CollegeStudent)}
          >
            <FaBuildingColumns />
            College Student
          </div>
          <div
            className={`signupdetails-user ${
              userType === userTypesEnum.Fresher ? "selected" : ""
            }`}
            onClick={() => setUserType(userTypesEnum.Fresher)}
          >
            <FaGraduationCap />
            Fresher
          </div>
          <div
            className={`signupdetails-user ${
              userType === userTypesEnum.Professional ? "selected" : ""
            }`}
            onClick={() => setUserType(userTypesEnum.Professional)}
          >
            <BsBag />
            Professional
          </div>
        </div>
      </div>

      {userType === userTypesEnum.CollegeStudent ||
      userType === userTypesEnum.Fresher ? (
        <div className="signup-college">
          <div className="signup-auth-inputbox">
            <label>Course/Degree</label>
            <input
              type="text"
              placeholder="Enter Course/Degree name"
              className="signup-inputs"
            />
          </div>
          <div className="signup-auth-inputbox">
            <label>Course Specialisation</label>
            <input
              type="text"
              placeholder="Enter Course Specialisation"
              className="signup-inputs"
            />
          </div>
          <div className="signup-auth-inputbox">
            <label>First Name</label>
            <div className="signup-auth-names">
              <input
                type="text"
                placeholder="Start year"
                className="signup-inputs"
              />
              <input
                type="text"
                placeholder="End year"
                className="signup-inputs"
              />
            </div>
          </div>
          <div className="signup-auth-inputbox">
            <label>College Name</label>
            <input
              type="text"
              placeholder="Enter College Name"
              className="signup-inputs"
            />
          </div>
          <div className="signup-auth-inputbox">
            <label>City</label>
            <input
              type="text"
              placeholder="Enter College City"
              className="signup-inputs"
            />
          </div>
        </div>
      ) : userType === userTypesEnum.Professional ? (
        <div className="signup-professional">
            <div className="signup-auth-inputbox">
            <label>Total Work Experience</label>
            <input
              type="text"
              placeholder="Enter Experience in years"
              className="signup-inputs"
            />
          </div>
          <div className="signup-auth-inputbox">
            <label>Current Job Role</label>
            <input
              type="text"
              placeholder="Enter Job Role"
              className="signup-inputs"
            />
          </div>
          <div className="signup-auth-inputbox">
            <label>Current Company</label>
            <input
              type="text"
              placeholder="Enter Company Name"
              className="signup-inputs"
            />
          </div>
          <div className="signup-auth-inputbox">
            <label>Duration</label>
            <div className="signup-auth-names">
              <input
                type="text"
                placeholder="Start year"
                className="signup-inputs"
              />
              <input
                type="text"
                placeholder="End year"
                className="signup-inputs"
              />
            </div>
          </div>
          <div className="signup-auth-inputbox">
            <label>City</label>
            <input
              type="text"
              placeholder="Enter Company City"
              className="signup-inputs"
            />
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default SignupDetails;
